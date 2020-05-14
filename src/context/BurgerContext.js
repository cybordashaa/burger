import React, { useState } from 'react';
import axios from '../axios-orders';

const BurgerContext = React.createContext();
const initialState = {
    ingredients: {
        salad: 0,
        cheese: 0,
        bacon: 0,
        meat: 0
    },
    totalPrice: 0,
    purchasing: false,
    ingredientNames: {
        bacon: "Гахайн мах",
        cheese: "Бяслаг",
        meat: "Үхрийн мах",
        salad: "Салад"
    },

    // order save
    newOrder: {
        saving: false,
        finished: false,
        error: null
    }
};
const INGREDIENT_PRICES = { salad: 150, cheese: 250, bacon: 800, meat: 1500 };

export const BurgerStore = props => {


    const [burger, setBurger] = useState(initialState);

    const saveBurger = (newOrder) => {
        //spinner show
        setBurger({ ...burger, saving: true });
        // const token = getState().signupReducer.token;
        // firebase save
        //`/orders.json?auth=${token}`
        axios.post('/orders.json', newOrder).then(response => {
            setBurger({ ...burger, saving: false, finished: true });
        }).catch(error => {
            setBurger({ ...burger, saving: false, finished: true, error });

        });

    }

    const clearOrder = () => {
        setBurger(initialState);
    }
    const addIngredient = (orts) => {
        setBurger({
            ...burger,
            ingredients: {
                ...burger.ingredients,
                [orts]: burger.ingredients[orts] + 1
            },
            totalPrice: burger.totalPrice + INGREDIENT_PRICES[orts],
            purchasing: true,
        });
        // setBurger({ ...burger, [orts]: burger[orts] + 1 });
    }

    const removeIngredient = (orts) => {
        const newPrice = burger.totalPrice - INGREDIENT_PRICES[orts];

        setBurger({
            ...burger,
            ingredients: {
                ...burger.ingredients,
                [orts]: burger.ingredients[orts] - 1
            },
            totalPrice: burger.totalPrice - INGREDIENT_PRICES[orts],
            purchasing: newPrice > 0

        });
    };

    return (
        <BurgerContext.Provider
            value={{
                burger,
                addIngredient,
                removeIngredient,
                saveBurger,
                clearOrder
            }}>
            {props.children}
        </BurgerContext.Provider>
    )

};


export default BurgerContext; 