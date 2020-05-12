import React, { Component } from 'react';
import Button from '../../components/General/Button';
import css from './style.module.css';
import * as actions from '../../redux/actions/loginAction';
import { connect } from 'react-redux';
import Spinner from '../../components/General/Spinner';
import { Redirect } from 'react-router-dom';

class Login extends Component {

    state = {
        email: "",
        password: ""
    }

    login = () => {

        this.props.login(this.state.email, this.state.password);
    }
    changeEmail = (e) => {

        this.setState({
            email: e.target.value
        })
    }

    changePassword = (e) => {

        this.setState({
            password: e.target.value
        })
    }
    render() {
        return (
            <div className={css.Login}>
                {this.props.userId && <Redirect to="/orders" />}
                <input onChange={this.changeEmail} type="text" placeholder="Имэйл хаяг" />
                <input onChange={this.changePassword} type="text" placeholder="Нууц Үг" />
                {this.props.logginIn && <Spinner />}
                {this.props.firebaseError && <div style={{ color: 'red' }}>{this.props.firebaseError} code: {this.props.firebaseErrorCode}</div>}
                <Button text="Логин" btnType="Success" daragdsan={this.login} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        logginIn: state.signupReducer.logginIn,
        firebaseError: state.signupReducer.firebaseError,
        firebaseErrorCode: state.signupReducer.firebaseErrorCode,
        userId: state.signupReducer.userId
    }
}
const mapDisppatchToProps = dispatch => {
    return {
        login: (email, password) => dispatch(actions.loginUser(email, password))
    }
}

export default connect(mapStateToProps, mapDisppatchToProps)(Login);