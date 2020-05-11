import React from 'react';
import { connect } from 'react-redux';
import Burger from '../../components/Burger';
import Button from '../../components/General/Button';
import css from './style.module.css';
import { Route } from 'react-router-dom';
import ContactData from '../../components/ContactData';

class ShippingPage extends React.Component {



    goBack = () => {
        this.props.history.goBack();
    }
    showContactData = () => {
        // this.props.history.push("/ship/contact");
        this.props.history.replace("/ship/contact");
    }
    render() {
        //console.log(this.props);

        return <div className={css.ShippingPage}>
            <strong><p style={{ fontSize: "24px" }}>Таны захиалга</p></strong>
            <strong><p style={{ fontSize: "24px" }}>Дүн: {this.props.price}</p></strong>
            <Burger />
            <Button daragdsan={this.goBack} btnType="Danger" text="Захиалгийг цуцлах" />
            <Button daragdsan={this.showContactData} btnType="Success" text="Хүргэлтийн мэдээлэл оруулах" />
            <Route
                path='/ship/contact'
                render={(props) => <ContactData />}
            />

            {/* <Route path="/ship/contact" render={() => (
                <ShippingPage ingredients={this.state.ingredients} price={this.state.price} />
            )} /> */}
        </div>
    }
}

const mapStateToProps = state => {
    return {
        price: state.totalPrice
    }
}
export default connect(mapStateToProps)(ShippingPage);