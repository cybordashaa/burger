import React from "react";

import css from "./style.module.css";
import MenuItem from "../MenuItem";

const Menu = () => (
  <div>
    <ul className={css.Menu}>
      <MenuItem active link="/">
        ШИНЭ ЗАХИАЛГА
      </MenuItem>
      <MenuItem link="/login">НЭВТРЭХ</MenuItem>
    </ul>
  </div>
);

export default Menu;
