import React from "react";

import css from "./style.module.css";

const BurgerIngredient = props => {
  if (props.type === "bread-top")
    return (
      <div className={css.BreadTop}>
        <div className={css.Seed}></div>
        <div className={`${css.Seed} ${css.Second}`}></div>
        <div className={`${css.Seed} ${css.Third}`}></div>
        <div className={`${css.Seed} ${css.Fourth}`}></div>
      </div>
    );
  if (props.type === "salad") return <div className={css.Salad}><button onClick={() => props.choose('Салад')}>x</button></div>;
  if (props.type === "bacon") return <div className={css.Bacon}>
    <button onClick={() => props.choose('Гахайн мах ')}>x</button>
  </div>;
  if (props.type === "meat") return <div className={css.Meat}>
    <button onClick={() => props.choose('Үхрийн мах')}>x</button>
  </div>;
  if (props.type === "cheese") return <div className={css.Cheese}>
    <button onClick={() => props.choose('Бяслаг')}>x</button>
  </div>;
  if (props.type === "bread-bottom")
    return <div className={css.BreadBottom}></div>;

  return <div>...</div>;
};

export default BurgerIngredient;
