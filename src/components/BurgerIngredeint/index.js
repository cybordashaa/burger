import React from 'react';
import css from './style.module.css';

// eh componentees props oor ugugdul damjuulj awna
const BurgerIngredient = props => {
    if(props.type ==='bread-top') return(
        <div className={css.BreadTop}>
            <div className={css.Seed}>
            </div>
            <div className={`${css.Seed} ${css.Second}`}></div>
            <div className={`${css.Seed} ${css.Third}`}></div>
            <div className={`${css.Seed} ${css.Fourth}`}></div>

        </div>
        
    );

if(props.type === 'salad') return <div className={css.Salad}>{props.type}</div>;
if(props.type === 'bacon') return <div className={css.Bacon}>{props.type}</div>;  

if(props.type === 'meat') return <div className={css.Meat}>{props.type}</div>;  
if(props.type === 'cheese') return <div className={css.Cheese}>{props.type}</div>;  
if(props.type === 'bread-bottom') return <div className={css.BreadBottom}>{props.type}</div>;  


return <div>...</div>;    


};

export  default BurgerIngredient;