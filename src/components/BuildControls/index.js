import React from 'react';
import BuildControl from '../BuildControl';
import css from "./buildControls.module.css";

const BuildControls = props => {


    return (
        <div className={css.BuildControls}>
            <p >Total price:<strong>{props.price}</strong> </p>
            {
                Object.keys(props.ingredientsNames).map(el => (
                    <BuildControl
                        key={el}
                        ortsHasah={props.ortsHasah}
                        ortsNemeh={props.ortsNemeh}
                        disabled={props.disabledIngredients}
                        type={el}
                        orts={props.ingredientsNames[el]}
                    />
                ))
            }
            <button
                onClick={props.showOrderConfirmModal}
                disabled={props.disabled} className={css.OrderButton}>Захиалах</button>

        </div>
    );
};
export default BuildControls;