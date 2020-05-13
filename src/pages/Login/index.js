import React, { useState, useEffect } from 'react';
import Button from '../../components/General/Button';
import css from './style.module.css';
import * as actions from '../../redux/actions/loginAction';
import { connect } from 'react-redux';
import Spinner from '../../components/General/Spinner';
import { Redirect } from 'react-router-dom';

const Login = (props) => {

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    // useEffect(() => {
    //     console.log('login effect');
    //     return () => {

    //         console.log('login clear...');

    //     }

    // }, [form.password]);

    const login = () => {

        props.login(form.email, form.password);
    }
    const changeEmail = (e) => {

        const newEmail = e.target.value;
        setForm((formBefore) => ({
            email: newEmail, password: formBefore.password
        }));
    };

    const changePassword = (e) => {
        const newPassword = e.target.value;
        setForm((formBefore) => ({
            email: formBefore.email, password: newPassword
        }))
    }

    return (
        <div className={css.Login}>
            {props.userId && <Redirect to="/orders" />}
            <input onChange={changeEmail} type="text" placeholder="Имэйл хаяг" />
            <input onChange={changePassword} type="text" placeholder="Нууц Үг" />
            {props.logginIn && <Spinner />}
            {props.firebaseError && <div style={{ color: 'red' }}>{props.firebaseError} code: {props.firebaseErrorCode}</div>}
            <Button text="Логин" btnType="Success" daragdsan={login} />
        </div>
    );

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