import React from "react";
import classes from "./Headers.module.css";

const Headers = (props) => {
  return (
    <div className={classes.head}>
      <div className={classes.headActions}>
        <div className={`${classes.headtitle} fs-6`}>{props.title}</div>
        <button
          className={`${classes.btn__workflow} btn`}
          onClick={props.onClick}
        >
          {props.btnText}
        </button>
      </div>
      <div className={classes.headDisc}>
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default Headers;
