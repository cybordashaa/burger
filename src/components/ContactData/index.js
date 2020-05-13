import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import css from './style.module.css'
import Button from '../General/Button';
import Spinner from '../General/Spinner';
import { withRouter } from 'react-router-dom';
import * as actions from '../../redux/actions/orderAction';

const ContactData = props => {

    const [name, setName] = useState();
    const [city, setCity] = useState();
    const [street, setStreet] = useState();

    // componentDidUpdate() {
    //     if (this.props.newOrderStatus.finished && !this.props.newOrderStatus.error) {
    //         this.props.history.replace("/orders");
    //     }
    // }

    useEffect(() => {
        if (props.newOrderStatus.finished && !this.props.newOrderStatus.error) {
            props.history.replace("/orders");
        }

    });

    const changeName = (e) => {
        setName(e.target.value);
    };

    const changeCity = (e) => {
        setCity(e.target.value);
    };

    const changeStreet = (e) => {
        setStreet(e.target.value);
    }
    const saveOrder = (props) => {
        const newOrder = {
            userId: props.userId,
            orts: props.ingredients,
            dun: props.price,
            hayag: {
                name,
                city,
                street
            }

        };

        props.saveOrderAction(newOrder);
    }


    return (
        <div className={css.ContactData}>
            Une: {props.price}
            <div>
                {props.newOrderStatus.error && `захиалах явцад алдаа гарлаа: ${props.newOrderStatus.error}`}
            </div>
            {props.newOrderStatus.saving ? <Spinner /> : (<div>
                <input onChange={changeName} type="text" name="name" placeholder="Таны нэр" />
                <input onChange={changeStreet} type="text" name="street" placeholder="Таны гэрийн хаяг" />
                <input onChange={changeCity} type="text" name="city" placeholder="Таны хот" />
                <Button text="Илгээх" btnType="Success" daragdsan={saveOrder} />
            </div>)}
        </div>
    )

}

const mapStateToProps = state => {
    return {
        price: state.burgerReducer.totalPrice,
        ingredients: state.burgerReducer.ingredients,
        newOrderStatus: state.orderReducer.newOrder,
        userId: state.signupReducer.userId
    }
}

const mapDispatchToProps = dispatch => {

    return {
        saveOrderAction: (newOrder) => dispatch(actions.saveOrder(newOrder))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ContactData));