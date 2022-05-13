import React from "react";
import classes from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div className={`${props.className} ${classes.modal}`}>
      <div>{props.children}</div>
    </div>
  );
};

export default Modal;
