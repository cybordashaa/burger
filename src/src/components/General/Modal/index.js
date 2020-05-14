import React from "react";
import css from "./style.module.css";
import Shadow from "../Shadow";

const Modal = props => {
  return (
    <div>
      <Shadow show={props.show} darahad={props.closeConfirmModal} />

      <div
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0"
        }}
        className={css.Modal}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
