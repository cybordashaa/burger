import React, { useState, useEffect } from "react";
import Button from "../../components/General/Button";
import css from "./style.module.css";
import * as actions from "../../redux/actions/signupActions";
import { connect } from "react-redux";
import Spinner from "../../components/General/Spinner";
import { Redirect } from "react-router-dom";

const Signup = props => {
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");

  // useEffect(() => {
  //   // check email in real time
  // }, [email, password1]);

  const signup = () => {
    if (password1 === password2) {
      props.signupUser(email, password1);
    } else {
      setError("Нууц үгнүүд хоорондоо таарахгүй байна!");
    }
  };

  return (
    <div className={css.Signup}>
      {props.userId && <Redirect to="/" />}

      <h1>Бүртгэлийн форм</h1>
      <div>Та өөрийн мэдээллээ оруулна уу</div>
      <input
        onChange={e => setEmail(e.target.value)}
        type="text"
        placeholder="Имэйл хаяг"
      />
      <input
        onChange={e => setPassword1(e.target.value)}
        type="password"
        placeholder="Нууц үгээ оруулна уу"
      />
      <input
        onChange={e => setPassword2(e.target.value)}
        type="password"
        placeholder="Нууц үгээ давтан оруулна уу"
      />
      {error && <div style={{ color: "red" }}>{error}</div>}

      {props.firebaseError && (
        <div style={{ color: "red" }}>{props.firebaseError}</div>
      )}

      {props.saving && <Spinner />}

      <Button text="БҮРТГҮҮЛЭХ" btnType="Success" daragdsan={signup} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    saving: state.signupReducer.saving,
    firebaseError: state.signupReducer.firebaseError,
    userId: state.signupReducer.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signupUser: (email, password) =>
      dispatch(actions.signupUser(email, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
