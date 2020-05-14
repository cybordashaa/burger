import React, { useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import UserContext from '../../context/UserContext';

const Logout = props => {

  const UserCTX = useContext(UserContext);
  useEffect(() => {
    UserCTX.logout();
  }, []);

  return <Redirect to="/" />;
};



export default Logout;
