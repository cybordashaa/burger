import React from 'react';
import css from './button.module.css';

const Button = props => (
    <button
        onClick={props.clicked}
        className={`${css.Button} ${css[props.btnType]}`}>{props.text}</button>
);

export default Button;