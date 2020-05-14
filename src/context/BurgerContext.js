import React, { useState } from 'react';

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
    }
};
const INGREDIENT_PRICES = { salad: 150, cheese: 250, bacon: 800, meat: 1500 };

export const BurgerStore = props => {
    const [burger, setBurger] = useState(initialState);

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
        <BurgerContext.Provider value={{ burger, addIngredient, removeIngredient }}>{props.children}</BurgerContext.Provider>
    )

};


export default BurgerContext; 