import React from 'react';
import BuildControl from '../BuildControl';
import css from "./buildControls.module.css";

const BuildControls = props => {

    const controls = {
        bacon: 'Гахайн мах',
        salad: 'Салад',
        cheese: 'Бяслаг',
        meat: 'Үхрийн мах'

    };
    return (
        <div className={css.BuildControls}>
            <p >Total price:<strong>{props.price}</strong> </p>
            {
                Object.keys(controls).map(el => (
                    <BuildControl
                        key={el}
                        ortsHasah={props.ortsHasah}
                        ortsNemeh={props.ortsNemeh}
                        disabled={props.disabledIngredients}
                        type={el}
                        orts={controls[el]}
                    />
                ))
            }
            <button disabled={props.disabled} className={css.OrderButton}>Захиалах</button>

        </div>
    );
};
export default BuildControls;