import React from "react";

import css from "./style.module.css";
import MenuItem from "../MenuItem";

const Menu = () => (
  <div>
    <ul className={css.Menu}>
      <MenuItem exact link="/">
        ШИНЭ ЗАХИАЛГА
      </MenuItem>
      <MenuItem link="/login">НЭВТРЭХ</MenuItem>
      <MenuItem link="/signUp">Бүртгүүлэх</MenuItem>
      <MenuItem link="/orders">ЗАХИАЛГУУД</MenuItem>
    </ul>
  </div>
);

export default Menu;
