import React from "react";

import BuildControl from "../BuildControl";
import css from "./style.module.css";

const BuildControls = props => {
  return (
    <div className={css.BuildControls}>
      <p>
        Бургерийн үнэ : <strong>{props.price}</strong>
      </p>

      {Object.keys(props.ingredientsNames).map(el => (
        <BuildControl
          key={el}
          ortsHasah={props.ortsHasah}
          ortsNemeh={props.ortsNemeh}
          disabled={props.disabledIngredients}
          type={el}
          orts={props.ingredientsNames[el]}
        />
      ))}

      <button
        onClick={props.showConfirmModal}
        disabled={props.disabled}
        className={css.OrderButton}
      >
        ЗАХИАЛАХ
      </button>
    </div>
  );
};

export default BuildControls;
