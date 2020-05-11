import React, { Component } from 'react';
import Button from '../../components/General/Button';
import css from './style.module.css';

class Login extends Component {

    state = {
        email: "",
        password: ""
    }

    login = () => {
        alert('login...')
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
                <input onChange={this.changeEmail} type="text" placeholder="Имэйл хаяг" />
                <input onChange={this.password} type="text" placeholder="Нууц Үг" />
                <Button text="Логин" btnType="Success" daragdsan={this.login} />
            </div>
        );
    }
}

export default Login;