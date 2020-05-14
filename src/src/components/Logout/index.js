import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/signupActions";
import { Redirect } from "react-router-dom";

const Logout = props => {
  useEffect(() => {
    props.logout();
  }, []);

  return <Redirect to="/" />;
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.logout())
  };
};

export default connect(null, mapDispatchToProps)(Logout);
