import React from "react";
import classes from "./Status.module.css";

const Status = (props) => {
  return (
    <div className={`${classes.flow}`}>
      <div className={classes.box}>Application</div>
      <div className={classes.box}>Interview</div>
      <div className={`${classes.box} ${classes.green} ${props.className}`}>Offer</div>
      <div className={classes.box}>onBoarding</div>
      <div className={classes.box}>Hired</div>
      <div className={classes.box}>Hold</div>
      <div className={classes.box}>Rejected</div>
    </div>
  );
};

export default Status;
