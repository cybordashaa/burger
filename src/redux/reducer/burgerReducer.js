const initialState = {
  ingredients: {
    salad: 0,
    cheese: 0,
    bacon: 0,
    meat: 0
  },
  totalPrice: 0
};

const INGREDIENT_PRICES = { salad: 150, cheese: 250, bacon: 800, meat: 1500 };

const reducer = (state = initialState, action) => {
  console.log("reducerees", action);
  if (action.type === "ADD_INGREDIENT") {
    console.log(action.nemehOrts);
    return {
      ingredients: {
        ...state.ingredients,
        [action.nemehOrts]: state.ingredients[action.nemehOrts] + 1
      },
      totalPrice: state.totalPrice + INGREDIENT_PRICES[action.nemehOrts]
    };
  } else if (action.type === "REMOVE_INGREDIENT") {

    return {
        ingredients: {
            ...state.ingredients,
            [action.ortsNer]: state.ingredients[action.ortsNer] -1
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ortsNer]

    }
  }
  return state;
};

export default reducer;
