import React, { useState, useEffect, useRef, useContext } from "react";
import css from "./style.module.css";
import Button from "../General/Button";
import Spinner from "../General/Spinner";
import BurgerContext from '../../context/BurgerContext';
import { withRouter } from "react-router-dom";

const ContactData = props => {


    const burgerCtx = useContext(BurgerContext);
    const [name, setName] = useState();
    const [city, setCity] = useState();
    const [street, setStreet] = useState();
    const dunRef = useRef();


    useEffect(() => {
        if (burgerCtx.burger.finished && !burgerCtx.burger.error) {
            props.history.replace("/orders");
        }
        //clear function
        return () => {
            // Захиалгийг буцаагаад хоосолно. Дарааачийн захиалгад бэлтгэнэ
            console.log('order clearing ...');
            if (burgerCtx.burger.finished === true) {
                burgerCtx.clearOrder();
            }

        }
    }, [burgerCtx.burger.finished]);

    const changeName = e => {
        if (dunRef.current.style.color === 'red') {
            dunRef.current.style.color = 'green';
        }
        else {
            dunRef.current.style.color = 'red'
        }

        setName(e.target.value);
    };

    const changeStreet = e => {
        setStreet(e.target.value);
    };

    const changeCity = e => {
        setCity(e.target.value);
    };

    const saveOrder = () => {
        const newOrder = {
            userId: "user",
            orts: burgerCtx.burger.ingredients,
            dun: burgerCtx.burger.totalPrice,
            hayag: {
                name,
                city,
                street
            }
        };

        burgerCtx.saveBurger(newOrder);
    };

    return (
        <div className={css.ContactData}>
            <div ref={dunRef}><strong style={{ fontSize: "16px" }}>Дүн: {burgerCtx.burger.totalPrice}₮</strong></div>
            <div>
                {burgerCtx.burger.error &&
                    `Захиалгыг хадгалах явцад алдаа гарлаа : ${burgerCtx.burger.error}`}
            </div>
            {burgerCtx.burger.saving ? (
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
