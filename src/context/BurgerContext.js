import React, { useState } from "react";
import axios from "../axios-orders";

const BurgerContext = React.createContext();

const INGREDIENT_PRICES = { salad: 150, cheese: 250, bacon: 800, meat: 1500 };

const initialState = {
  ingredients: {
    salad: 0,
    cheese: 0,
    bacon: 0,
    meat: 0,
  },
  totalPrice: 1000,
  purchasing: false,
  ingredientNames: {
    bacon: "Гахайн мах",
    cheese: "Бяслаг",
    meat: "Үхрийн мах",
    salad: "Салад",
  },
  saving: false,
  finished: false,
  error: null,
};

export const BurgerStore = (props) => {
  const [burger, setBurger] = useState(initialState);

  const saveBurger = (newOrder, token) => {
    // Spinner ergelduulne
    setBurger({ ...burger, saving: true });
    // Firebase ruu hadgalna
    // orders.json?auth=${token}
    axios
      .post(`orders.json?auth=${token}`, newOrder)
      .then((response) => {
        setBurger({ ...burger, saving: false, finished: true, error: null });
      })
      .catch((error) => {
        setBurger({ ...burger, saving: false, finished: true, error });
      });
  };

  const clearBurger = () => {
    setBurger(initialState);
  };

  const addIngredient = (orts) => {
    setBurger({
      ...burger,
      ingredients: {
        ...burger.ingredients,
        [orts]: burger.ingredients[orts] + 1,
      },
      totalPrice: burger.totalPrice + INGREDIENT_PRICES[orts],
      purchasing: true,
    });
  };

  const removeIngredient = (orts) => {
    const newPrice = burger.totalPrice - INGREDIENT_PRICES[orts];
    setBurger({
      ...burger,
      ingredients: {
        ...burger.ingredients,
        [orts]: burger.ingredients[orts] - 1,
      },
      totalPrice: newPrice,
      purchasing: newPrice > 1000,
    });
  };

  return (
    <BurgerContext.Provider
      value={{
        burger,
        addIngredient,
        removeIngredient,
        saveBurger,
        clearBurger,
      }}
    >
      {props.children}
    </BurgerContext.Provider>
  );
};

export default BurgerContext;
