import React, { useContext } from "react";

import { connect } from 'react-redux';
import css from "./style.module.css";
import * as actions from '../../redux/actions/burgerAction';
import BurgerContext from '../../context/BurgerContext';

const BuildControl = props => {
  //console.log("=========", BurgerContext);
  const appData = useContext(BurgerContext);


  return (
    <div className={css.BuildControl}>
      <div className={css.Label}>{props.orts}</div>
      <button
        disabled={props.disabled[props.type]}
        onClick={() => props.ortsHasah(props.type)}
        className={css.Less}
      >
        Хасах
    </button>
      <button onClick={() => props.ortsNemeh(props.type)} className={css.More}>
        Нэмэх {appData}
      </button>
    </div>
  );
};
// dispatch aar orj irj bga action iig props ruu damjuulah 
const mapDispatchToProps = dispatch => {
  return {
    ortsNemeh: ortsNer =>
      dispatch(actions.addIngredient(ortsNer)),
    ortsHasah: ortsNer =>
      dispatch(actions.removeIngredient(ortsNer))
  };
};

export default connect(null, mapDispatchToProps)(BuildControl);
