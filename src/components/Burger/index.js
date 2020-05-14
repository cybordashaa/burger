import React, { useContext } from "react";
import BurgerIngredient from "../BurgerIngredient";
import css from "./style.module.css";
import BurgerContext from '../../context/BurgerContext';

const Burger = props => {

  const burgerContext = useContext(BurgerContext);
  //{bacon: 2, cheese: 2, meat: 1, salad: 1}
  const items = Object.entries(burgerContext.burger.ingredients);

  let content = [];
  items.map(el => {
    for (let i = 0; i < el[1]; i++)
      content.push(<BurgerIngredient key={`${el[0]}${i + 1}`} type={el[0]} />);
  });

  if (content.length === 0)
    content = <p>Хачиртай талхныхаа орцыг сонгоно уу...</p>;

  //console.log(props);

  return (
    <div className={css.Burger}>
      <BurgerIngredient type="bread-top" />
      {content}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};


export default Burger;
