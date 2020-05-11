import React from 'react';
import { connect } from 'react-redux';
import css from './style.module.css'
import Button from '../General/Button';
import axios from '../../axios-orders';
import Spinner from '../General/Spinner';
import { withRouter } from 'react-router-dom';
import * as actions from '../../redux/actions/orderAction';

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
        const newOrder = {
            orts: this.props.ingredients,
            dun: this.props.price,
            hayag: {
                name: this.state.name,
                city: this.state.city,
                street: this.state.street
            }

        };

        this.props.saveOrderAction(newOrder);
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

const mapStateToProps = state => {
    return {
        price: state.burgerReducer.totalPrice,
        ingredients: state.burgerReducer.ingredients,
    }
}

const mapDispatchToProps = dispatch => {

    return {
        saveOrderAction: (newOrder) => dispatch(actions.saveOrder(newOrder))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ContactData));