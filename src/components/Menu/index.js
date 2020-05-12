import React, { Fragment } from "react";
import { connect } from 'react-redux';
import css from "./style.module.css";
import MenuItem from "../MenuItem";

const Menu = props => (
  <div>
    <ul className={css.Menu}>
      <MenuItem exact link="/">
        ШИНЭ ЗАХИАЛГА
      </MenuItem>
      {props.userId ? (<MenuItem link="/logout">ГАРАХ</MenuItem>) : (<Fragment><MenuItem link="/login">НЭВТРЭХ</MenuItem>
        <MenuItem link="/signUp">Бүртгүүлэх</MenuItem></Fragment>)}


      <MenuItem link="/orders">ЗАХИАЛГУУД</MenuItem>
    </ul>
  </div>
);

const mapStateToProps = state => {
  return {
    userId: state.signupReducer.userId
  }
}
export default connect(mapStateToProps)(Menu);
