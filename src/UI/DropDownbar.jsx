import React from "react";
import classes from "./DropDownbar.module.css";
const DropDownbar = (props) => {
  return (
    <div className={`${classes.dropdown} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default DropDownbar;
