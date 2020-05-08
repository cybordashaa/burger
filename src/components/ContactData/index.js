import React from 'react';
import css from './style.module.css'
import Button from '../General/Button';
import axios from '../../axios-orders';
import Spinner from '../General/Spinner';
import { withRouter } from 'react-router-dom';

class ContactData extends React.Component {

    state = {
        name: null,
        city: null,
        street: null,
        loading: false
    };

    changeName = (e) => {
        this.setState({
            name: e.target.value
        });
    };

    changeCity = (e) => {
        this.setState({
            city: e.target.value
        });
    };

    changeStreet = (e) => {
        this.setState({
            street: e.target.value
        });
    }
    saveOrder = (props) => {
        const order = {
            orts: this.props.ingredients,
            dun: this.props.price,
            hayag: {
                name: this.state.name,
                city: this.state.city,
                street: this.state.street
            }

        };
        //console.log("continue daragdlaa...");
        this.setState({
            loading: true
        });
        axios.post('/orders.json', order).then(response => {
            console.log('order success');

        }).catch(error => {
            console.log('error :' + error);

        }).finally(() => {
            this.setState({
                loading: false
            });
            this.props.history.replace("/orders");
        });
    }

    render() {

        return (
            <div className={css.ContactData}>
                Une: {this.props.price}
                {this.state.loading ? <Spinner /> : (<div>
                    <input onChange={this.changeName} type="text" name="name" placeholder="Таны нэр" />
                    <input onChange={this.changeStreet} type="text" name="street" placeholder="Таны гэрийн хаяг" />
                    <input onChange={this.changeCity} type="text" name="city" placeholder="Таны хот" />
                    <Button text="Илгээх" btnType="Success" daragdsan={this.saveOrder} />
                </div>)}
            </div>
        )
    }
}

export default withRouter(ContactData);