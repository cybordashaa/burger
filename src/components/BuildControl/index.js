import React, { useContext } from "react";
import css from "./style.module.css";
import BurgerContext from '../../context/BurgerContext';

const BuildControl = props => {
  //console.log("=========", BurgerContext);
  const burgerContext = useContext(BurgerContext);


  return (
    <div className={css.BuildControl}>
      <div className={css.Label}>{props.orts}</div>
      <button
        disabled={props.disabled[props.type]}
        onClick={() => burgerContext.removeIngredient(props.type)}
        className={css.Less}
      >
        Хасах
    </button>
      <button onClick={() => burgerContext.addIngredient(props.type)} className={css.More}>
        Нэмэх
      </button>
    </div>
  );
};
// dispatch aar orj irj bga action iig props ruu damjuulah 


export default BuildControl;
