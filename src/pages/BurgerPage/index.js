import React, { Component } from "react";
import { connect } from "react-redux";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/General/Spinner";

const INGREDIENT_PRICES = { salad: 150, cheese: 250, bacon: 800, meat: 1500 };
const INGREDIENT_NAMES = {
  bacon: "Гахайн мах",
  cheese: "Бяслаг",
  meat: "Үхрийн мах",
  salad: "Салад"
};

class BurgerPage extends Component {
  state = {
    purchasing: false,
    confirmOrder: false
  };

  componentDidMount = () => {};

  continueOrder = () => {
    const params = [];

    for (let orts in this.props.burgeriinOrts) {
      params.push(orts + "=" + this.props.burgeriinOrts[orts]);
    }

    params.push("dun=" + this.props.niitUne);

    this.props.history.push({
      pathname: "/ship",
      search: params.join("&")
    });

    this.closeConfirmModal();
  };

  showConfirmModal = () => {
    this.setState({ confirmOrder: true });
  };

  closeConfirmModal = () => {
    this.setState({ confirmOrder: false });
  };

  ortsNemeh = type => {
    const newIngredients = { ...this.props.burgeriinOrts };
    newIngredients[type]++;
    const newPrice = this.props.niitUne + INGREDIENT_PRICES[type];
    this.setState({
      purchasing: true,
      totalPrice: newPrice,
      ingredients: newIngredients
    });
  };

  ortsHasah = type => {
    if (this.props.burgeriinOrts[type] > 0) {
      const newIngredients = { ...this.props.burgeriinOrts };
      newIngredients[type]--;
      const newPrice = this.props.niitUne - INGREDIENT_PRICES[type];
      this.setState({
        purchasing: newPrice > 1000,
        totalPrice: newPrice,
        ingredients: newIngredients
      });
    }
  };

  render() {
    console.log(this.props);
    const disabledIngredients = { ...this.props.burgeriinOrts };

    for (let key in disabledIngredients) {
      disabledIngredients[key] = disabledIngredients[key] <= 0;
    }

    console.log("hey", this.props);

    return (
      <div>
        <Modal
          closeConfirmModal={this.closeConfirmModal}
          show={this.state.confirmOrder}
        >
          {this.state.loading ? (
            <Spinner />
          ) : (
            <OrderSummary
              onCancel={this.closeConfirmModal}
              onContinue={this.continueOrder}
              price={this.props.niitUne}
              ingredientsNames={INGREDIENT_NAMES}
              ingredients={this.props.burgeriinOrts}
            />
          )}
        </Modal>

        <Burger orts={this.props.burgeriinOrts} />
        <BuildControls
          showConfirmModal={this.showConfirmModal}
          ingredientsNames={INGREDIENT_NAMES}
          disabled={!this.state.purchasing}
          price={this.props.niitUne}
          disabledIngredients={disabledIngredients}
          ortsHasah={this.props.burgereesOrtsHas}
          ortsNemeh={this.props.burgertOrtsNem}
        />
      </div>
    );
  }
}

const a = state => {
  return {
    burgeriinOrts: state.ingredients,
    niitUne: state.totalPrice
  };
};

const b = dispatch => {
  return {
    burgertOrtsNem: ortsNer =>
      dispatch({ type: "ADD_INGREDIENT", nemehOrts: ortsNer }),
    burgereesOrtsHas: ortsNer =>
      dispatch({ type: "REMOVE_INGREDIENT", ortsNer })
  };
};

export default connect(a, b)(BurgerPage);
