import React, { Component } from "react";

import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
import axios from '../../axios-orders';
import Spinner from "../../components/General/Spinner";

const INGREDIENT_PRICES = { salad: 150, cheese: 250, bacon: 800, meat: 1500 };
const INGREDIENT_NAMES = {
  bacon: "Гахайн мах",
  cheese: "Бяслаг",
  meat: "Үхрийн мах",
  salad: "Салад"
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0
    },
    totalPrice: 1000,
    purchasing: false,
    confirmOrder: false,
    lastCustomerName: 'N/A',
    loading: false
  };

  componentDidMount = () => {
    this.setState({
      loading: true
    });
    axios.get('/orders.json').then(response => {
      let arr = Object.entries(response.data);
      arr = arr.reverse();
      arr.forEach(el => {
        console.log(el[1].hayag.name + '===> ' + el[1].dun);
      })
      const lastOrder = arr[arr.length - 1][1];
      //console.log(lastOrder);

      this.setState({ ingredients: lastOrder.orts, totalPrice: lastOrder.dun, lastCustomerName: lastOrder.hayag.name });

    }).catch(err => console.log(err)).finally(() => {
      this.setState({
        loading: false
      })
    });

  };

  continueOrder = () => {
    const order = {
      orts: this.state.ingredients,
      dun: this.state.totalPrice,
      hayag: {
        name: 'Dash',
        city: 'Ub',
        street: '10 r horoolol'
      }

    };
    //console.log("continue daragdlaa...");
    this.setState({
      loading: true
    });
    axios.post('/orders.json', order).then(response => {

    }).finally(() => {
      this.setState({
        loading: false
      })
    });
  };

  showConfirmModal = () => {
    this.setState({ confirmOrder: true });
  };

  closeConfirmModal = () => {
    this.setState({ confirmOrder: false });
  };

  ortsNemeh = type => {
    const newIngredients = { ...this.state.ingredients };
    newIngredients[type]++;
    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({
      purchasing: true,
      totalPrice: newPrice,
      ingredients: newIngredients
    });
  };

  ortsHasah = type => {
    if (this.state.ingredients[type] > 0) {
      const newIngredients = { ...this.state.ingredients };
      newIngredients[type]--;
      const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
      this.setState({
        purchasing: newPrice > 1000,
        totalPrice: newPrice,
        ingredients: newIngredients
      });
    }
  };


  render() {
    const disabledIngredients = { ...this.state.ingredients };

    for (let key in disabledIngredients) {
      disabledIngredients[key] = disabledIngredients[key] <= 0;
    }

    return (
      <div>
        <Modal
          closeConfirmModal={this.closeConfirmModal}
          show={this.state.confirmOrder}
        >
          {
            this.state.loading ? (
              <Spinner />
            ) : (
                <OrderSummary
                  onCancel={this.closeConfirmModal}
                  onContinue={this.continueOrder}
                  price={this.state.totalPrice}
                  ingredientsNames={INGREDIENT_NAMES}
                  ingredients={this.state.ingredients}
                />
              )
          }

        </Modal>
        {this.state.loading && <Spinner />}
        <p style={{ width: "100%", textAlign: "center", fontSize: "28px" }}>
          Сүүлчийн захиалагч: {this.state.lastCustomerName}
        </p>
        <Burger orts={this.state.ingredients} />
        <BuildControls
          showConfirmModal={this.showConfirmModal}
          ingredientsNames={INGREDIENT_NAMES}
          disabled={!this.state.purchasing}
          price={this.state.totalPrice}
          disabledIngredients={disabledIngredients}
          ortsHasah={this.ortsHasah}
          ortsNemeh={this.ortsNemeh}
        />
      </div>
    );
  }
}

export default BurgerBuilder;
