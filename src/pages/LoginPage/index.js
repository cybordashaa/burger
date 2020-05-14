import React, { useState } from "react";
import { connect } from "react-redux";
import Button from "../../components/General/Button";
import css from "./style.module.css";
import * as actions from "../../redux/actions/loginActions";
import Spinner from "../../components/General/Spinner";
import { Redirect } from "react-router-dom";

const Login = (props) => {
  const [form, setForm] = useState({
    email: "",
    password: "12",
  });

  const changeEmail = (e) => {
    const newEmail = e.target.value;
    setForm((formBefore) => ({
      email: newEmail,
      password: formBefore.password,
    }));
  };

  const changePassword = (e) => {
    const newPassword = e.target.value;
    setForm((formBefore) => ({
      email: formBefore.email,
      password: newPassword,
    }));
  };

  const login = () => {
    props.login(form.email, form.password);
  };

  return (
    <div className={css.Login}>
      {props.userId && <Redirect to="/orders" />}
      <input onChange={changeEmail} type="text" placeholder="Имэйл хаяг" />
      <input onChange={changePassword} type="password" placeholder="Нууц үг" />
      {props.logginIn && <Spinner />}
      {props.firebaseError && (
        <div style={{ color: "red" }}>
          {props.firebaseError} код нь : {props.firebaseErrorCode}
        </div>
      )}
      <Button text="ЛОГИН" btnType="Success" daragdsan={login} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    logginIn: state.signupReducer.logginIn,
    firebaseError: state.signupReducer.firebaseError,
    firebaseErrorCode: state.signupReducer.firebaseErrorCode,
    userId: state.signupReducer.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(actions.loginUser(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
