import React from 'react';
import Burger from '../../components/Burger';
import Button from '../../components/General/Button';
import css from './style.module.css';
import { Route } from 'react-router-dom';
import ContactData from '../../components/ContactData';

export class ShippingPage extends React.Component {

    state = {
        ingredients: {},
        price: 0
    };


    componentDidMount() {
        //console.log(this.props);
        const query = new URLSearchParams(this.props.location.search);

        const orts = {};
        let price = 0;
        for (let param of query.entries()) {
            // orts[param[0]] = param[1];
            if (param[0] !== "dun") orts[param[0]] = param[1];
            else price = param[1];
        }

        this.setState({
            ingredients: orts,
            price
        });

    }
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
            <strong><p style={{ fontSize: "24px" }}>Дүн: {this.state.price}</p></strong>
            <Burger orts={this.state.ingredients} />
            <Button daragdsan={this.goBack} btnType="Danger" text="Захиалгийг цуцлах" />
            <Button daragdsan={this.showContactData} btnType="Success" text="Хүргэлтийн мэдээлэл оруулах" />
            <Route
                path='/ship/contact'
                render={(props) => <ContactData ingredients={this.state.ingredients} price={this.state.price} />}
            />

            {/* <Route path="/ship/contact" render={() => (
                <ShippingPage ingredients={this.state.ingredients} price={this.state.price} />
            )} /> */}
        </div>
    }
}