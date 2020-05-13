import React from 'react';
import { connect } from 'react-redux';
import Burger from '../../components/Burger';
import Button from '../../components/General/Button';
import css from './style.module.css';
import { Route } from 'react-router-dom';
import ContactData from '../../components/ContactData';

const ShippingPage = props => {

    const goBack = () => {
        props.history.goBack();
    }
    const showContactData = () => {
        // props.history.push("/ship/contact");
        props.history.replace("/ship/contact");
    }

    //console.log(props);

    return <div className={css.ShippingPage}>
        <strong><p style={{ fontSize: "24px" }}>Таны захиалга</p></strong>
        <strong><p style={{ fontSize: "24px" }}>Дүн: {props.price}</p></strong>
        <Burger />
        <Button daragdsan={goBack} btnType="Danger" text="Захиалгийг цуцлах" />
        <Button daragdsan={showContactData} btnType="Success" text="Хүргэлтийн мэдээлэл оруулах" />
        <Route
            path='/ship/contact'
            render={(props) => <ContactData />}
        />

        {/* <Route path="/ship/contact" render={() => (
                <ShippingPage ingredients={state.ingredients} price={state.price} />
            )} /> */}
    </div>

}

const mapStateToProps = state => {
    return {
        price: state.burgerReducer.totalPrice
    }
}
export default connect(mapStateToProps)(ShippingPage);