import React, { useState, useContext } from 'react';
import Button from '../../components/General/Button';
import css from './style.module.css';
import Spinner from '../../components/General/Spinner';
import { Redirect } from 'react-router-dom';
import UserContext from '../../context/UserContext';

const Login = (props) => {

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const UserCTX = useContext(UserContext);
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

        UserCTX.loginUser(form.email, form.password);
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
            {UserCTX.state.userId && <Redirect to="/orders" />}
            <input onChange={changeEmail} type="text" placeholder="Имэйл хаяг" />
            <input onChange={changePassword} type="text" placeholder="Нууц Үг" />
            {UserCTX.state.logginIn && <Spinner />}
            {UserCTX.state.error && <div style={{ color: 'red' }}>{UserCTX.state.error} code: {UserCTX.state.errorCode}</div>}
            <Button text="Логин" btnType="Success" daragdsan={login} />
        </div>
    );

}

export default Login;