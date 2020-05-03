import React from 'react';
import BurgerIngredient from '../BurgerIngredeint';
import css from './burger.module.css';


const Burger = () => (
    <div className={css.Burger}>
        <BurgerIngredient type="bread-top"/>
        <BurgerIngredient type="salad"/>
        <BurgerIngredient type="bacon"/>
        <BurgerIngredient type="meat"/>
        <BurgerIngredient type="bread-bottom"/>
    </div>
);

export  default Burger;