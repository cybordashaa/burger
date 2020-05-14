import React, { useContext } from "react";
import Button from "../General/Button";
import BurgerContext from "../../context/BurgerContext";

const OrderSummary = props => {
  const burgerContext = useContext(BurgerContext);

  return (
    <div>
      <h3>Таны захиалга</h3>
      <p>Таны сонгосон орцууд: </p>
      <ul>
        {Object.keys(burgerContext.burger.ingredients).map(el => (
          <li key={el}>
            {burgerContext.burger.ingredientNames[el]} : {burgerContext.burger.ingredients[el]}
          </li>
        ))}
      </ul>
      <p>
        <strong>Захиалгын дүн: {burgerContext.burger.totalPrice}₮ </strong>
      </p>
      <p>Цаашаа үргэлжлүүлэх үү?</p>
      <Button daragdsan={props.onCancel} btnType="Danger" text="ТАТГАЛЗАХ" />
      <Button
        daragdsan={props.onContinue}
        btnType="Success"
        text="ҮРГЭЛЖЛҮҮЛЭХ"
      />
    </div>
  );
};
export default OrderSummary;
