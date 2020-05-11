import React, { Component } from 'react';
import css from './style.module.css';
import Button from '../../components/General/Button';
import * as actions from "../../redux/actions/signUpAction";
import { connect } from 'react-redux';

class Signup extends Component {

    state = {
        email: "",
        password1: "",
        password2: "",
        error: ''
    }

    sign = () => {
        if (this.state.password1 === this.state.password2) {
            this.props.signupUser(this.state.email, this.state.password1);
        } else {
            this.setState({
                error: 'Wrong Password'
            })
        }
    }

    changeEmail = (e) => {

        this.setState({
            email: e.target.value
        })
    }

    changePassword1 = (e) => {

        this.setState({
            password1: e.target.value
        })
    }
    changePassword2 = (e) => {

        this.setState({
            password2: e.target.value
        })
    }
    render() {
        return (
            <div className={css.Sign}>
                <h1>Register</h1>
                <input onChange={this.changeEmail} type="text" placeholder="Имэйл хаяг" />
                <input onChange={this.changePassword1} type="password" placeholder="Нууц Үгээ оруулна уу" />
                <input onChange={this.changePassword2} type="password" placeholder="Давтан Нууц Үгээ оруулна уу" />
                {this.state.error && (<div style={{ color: 'red' }}>{this.state.error}</div>)}
                <Button text="Бүртгүүлэх" btnType="Success" daragdsan={this.sign} />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signupUser: (email, password) => dispatch(actions.signupUser(email, password))
    };
};

export default connect(null, mapDispatchToProps)(Signup);