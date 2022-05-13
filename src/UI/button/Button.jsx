import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <div
      className={`${classes.actions} ${props.className}`}
      onClick={props.onClick}
      style={props.style}
    >
      {props.children}
    </div>
  );
};

export default Button;
