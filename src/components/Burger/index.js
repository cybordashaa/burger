import React from 'react';
import BurgerIngredient from '../BurgerIngredeint';
import css from './burger.module.css';


const Burger = (props) => {


    // { bacon: 2, meat: 2, cheese: 2, salad: 1}
    // entries function ni atributiig neg massive bolgoj butsaadag
    const items = Object.entries(props.orts);
    //console.log(items);


    let content = [];
    items.map(el => {
        for (let i = 0; i < el[1]; i++)
            content.push(<BurgerIngredient key={`${el[0]}${i + 1}`} type={el[0]} />)

    });
    if (content.length === 0) {
        content = <p>Хачиртай талхныхаа орцыг сонгон уу</p>;
    }
    return (
        <div className={css.Burger}>
            <BurgerIngredient type="bread-top" />
            {content}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
};

export default Burger;