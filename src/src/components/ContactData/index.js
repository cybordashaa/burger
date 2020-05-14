import React, { useState, useEffect, useRef, useContext } from "react";
import css from "./style.module.css";
import Button from "../General/Button";
import Spinner from "../General/Spinner";
import { withRouter } from "react-router-dom";
import BurgerContext from "../../context/BurgerContext";

const ContactData = (props) => {
  const ctx = useContext(BurgerContext);
  const [name, setName] = useState();
  const [city, setCity] = useState();
  const [street, setStreet] = useState();

  const dunRef = useRef();

  useEffect(() => {
    if (ctx.burger.finished && !ctx.burger.error) {
      props.history.replace("/orders");
    }

    return () => {
      // Цэвэрлэгч функц : Захиалгыг буцаагаад хоосолно. Дараачийн захиалгад бэлтгэнэ гэсэн үг.
      ctx.clearBurger();
    };
  }, [ctx.burger.finished]);

  const changeName = (e) => {
    if (dunRef.current.style.color === "red")
      dunRef.current.style.color = "green";
    else dunRef.current.style.color = "red";

    setName(e.target.value);
  };

  const changeStreet = (e) => {
    setStreet(e.target.value);
  };

  const changeCity = (e) => {
    setCity(e.target.value);
  };

  const saveOrder = () => {
    const newOrder = {
      userId: "props.userId",
      orts: ctx.burger.ingredients,
      dun: ctx.burger.totalPrice,
      hayag: {
        name,
        city,
        street,
      },
    };

    ctx.saveBurger(newOrder);
  };

  return (
    <div className={css.ContactData}>
      <div ref={dunRef}>
        <strong style={{ fontSize: "16px" }}>
          Дүн : {ctx.burger.totalPrice}₮
        </strong>
      </div>
      <div>
        {ctx.burger.error &&
          `Захиалгыг хадгалах явцад алдаа гарлаа : ${ctx.burger.error}`}
      </div>
      {ctx.burger.saving ? (
        <Spinner />
      ) : (
        <div>
          <input
            onChange={changeName}
            type="text"
            name="name"
            placeholder="Таны нэр"
          />
          <input
            onChange={changeStreet}
            type="text"
            name="street"
            placeholder="Таны гэрийн хаяг"
          />
          <input
            onChange={changeCity}
            type="text"
            name="city"
            placeholder="Таны хот"
          />
          <Button text="ИЛГЭЭХ" btnType="Success" daragdsan={saveOrder} />
        </div>
      )}
    </div>
  );
};

export default withRouter(ContactData);
