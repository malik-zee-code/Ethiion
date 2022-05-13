import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import DropDownbar from "../../../UI/DropDownbar";
import classes from "./Report.module.css";

const Report = (props) => {
  return (
    <>
      <DropDownbar
        className={`${props.className} ${
          !props.toggle ? classes.dropdown : ""
        }`}
      >
        <FontAwesomeIcon icon={props.icon} />
        <span className={classes.title}>{props.title}</span>
        <FontAwesomeIcon
          className={classes.angel}
          icon={props.toggle ? props.actionIcons[0] : props.actionIcons[1]}
          onClick={props.onClick}
        />
      </DropDownbar>
    </>
  );
};

export default Report;
