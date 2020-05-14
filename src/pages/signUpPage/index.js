import React, { useState, useContext } from "react";
import Button from "../../components/General/Button";
import css from "./style.module.css";
import Spinner from "../../components/General/Spinner";
import { Redirect } from "react-router-dom";
import UserContext from '../../context/UserContext';

const Signup = props => {

  const UserCTX = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");



  // useEffect(() => {
  //   // check email in real time
  // }, [email, password1]);

  const signup = () => {
    if (password1 === password2) {
      UserCTX.signupUser(email, password1);
    } else {
      setError("Нууц үгнүүд хоорондоо таарахгүй байна!");
    }
  };

  return (
    <div className={css.Signup}>
      {UserCTX.state.userId && <Redirect to="/" />}

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

      {UserCTX.state.error && (
        <div style={{ color: "red" }}>{UserCTX.state.error}</div>
      )}

      {UserCTX.state.saving && <Spinner />}

      <Button text="БҮРТГҮҮЛЭХ" btnType="Success" daragdsan={signup} />
    </div>
  );
};


export default Signup;
