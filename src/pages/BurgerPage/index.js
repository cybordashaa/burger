import React, { Component } from 'react';
import Burger from '../../components/Burger';
import BuildControls from '../../components/BuildControls';
import Modal from '../../components/General/Modal';
import OrderSummary from '../../components/OrderSummary';

const INGREDIENT_PRICES = { salad: 150, cheese: 250, bacon: 800, meat: 1500 };
const INGREDIENT_NAMES = {
    bacon: 'Гахайн мах',
    salad: 'Салад',
    cheese: 'Бяслаг',
    meat: 'Үхрийн мах'

};
class BurgerPage extends Component {
    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            bacon: 0,
            meat: 0
        },
        totalPrice: 0,
        purchasing: false,
        confirmOrder: false
    };

    ortsNemeh = type => {
        const newIngredients = { ...this.state.ingredients };
        newIngredients[type]++;
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        this.setState({ purchasing: true, totalPrice: newPrice, ingredients: newIngredients });
    };

    ortsHasah = type => {
        if (this.state.ingredients[type] > 0) {
            const newIngredients = { ...this.state.ingredients };
            newIngredients[type]--;
            const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];

            this.setState({ purchasing: newPrice > 0, totalPrice: newPrice, ingredients: newIngredients });
        }
    };

    showOrderConfirmModal = () => {
        this.setState({
            confirmOrder: true
        });
    }
    closeConfirmModal = () => {
        this.setState({ confirmOrder: false });
    }

    render() {
        const disabledIngredients = { ...this.state.ingredients };

        for (let key in disabledIngredients) {
            disabledIngredients[key] = disabledIngredients[key] <= 0;
        }

        return (
            <div>
                <Modal
                    closeConfirmModal={this.closeConfirmModal}

                    show={this.state.confirmOrder}>
                    <OrderSummary
                        price={this.state.totalPrice}
                        ingredients={this.state.ingredients}
                        ingredientsNames={INGREDIENT_NAMES}
                    />
                </Modal>
                <Burger orts={this.state.ingredients} />
                <BuildControls
                    showOrderConfirmModal={this.showOrderConfirmModal}
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
export default BurgerPage;