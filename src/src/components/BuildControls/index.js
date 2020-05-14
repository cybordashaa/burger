import React, { useContext } from "react";
import BurgerContext from "../../context/BurgerContext";
import BuildControl from "../BuildControl";
import css from "./style.module.css";

const BuildControls = (props) => {
  const burgerContext = useContext(BurgerContext);
  const disabledIngredients = { ...burgerContext.burger.ingredients };

  for (let key in disabledIngredients) {
    disabledIngredients[key] = disabledIngredients[key] <= 0;
  }

  return (
    <div className={css.BuildControls}>
      <p>
        Бургерийн үнэ : <strong>{burgerContext.burger.totalPrice}</strong>
      </p>

      {Object.keys(burgerContext.burger.ingredientNames).map((el) => (
        <BuildControl
          key={el}
          disabled={disabledIngredients}
          type={el}
          orts={burgerContext.burger.ingredientNames[el]}
        />
      ))}

      <button
        onClick={props.showConfirmModal}
        disabled={!burgerContext.burger.purchasing}
        className={css.OrderButton}
      >
        ЗАХИАЛАХ
      </button>
    </div>
  );
};

export default BuildControls;
