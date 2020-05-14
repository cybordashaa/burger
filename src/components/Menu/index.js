import React, { useContext } from "react";
import css from "./style.module.css";
import MenuItem from "../MenuItem";
import UserContext from '../../context/UserContext';

const Menu = props => {

  const UserCTX = useContext(UserContext);
  return (
    <div>
      <ul className={css.Menu}>
        {UserCTX.state.userId ? (
          <>
            <MenuItem exact link="/">
              ШИНЭ ЗАХИАЛГА
          </MenuItem>
            <MenuItem link="/orders">ЗАХИАЛГАНУУД</MenuItem>
            <MenuItem link="/logout">ГАРАХ</MenuItem>
          </>
        ) : (
            <>
              <MenuItem link="/login">НЭВТРЭХ</MenuItem>
              <MenuItem link="/signup">БҮРТГҮҮЛЭХ</MenuItem>
            </>
          )}
      </ul>
    </div>
  );
}
export default Menu;
