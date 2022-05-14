import React, { useState } from "react";
import classes from "./Status.module.css";
import { Button } from "@mui/material";

const Status = (props) => {
  const [counter, setCount] = useState(0);

  const handleSubmit = () => {
    setCount((preVal) => preVal + 1);
  };
  // setCount((preV) => preV + 1);
  let classing = "";
  let classing1 = "";
  let classing2 = "";
  let classing3 = "";
  let classing4 = "";
  let classing5 = "";
  let classing6 = "";
  console.log(counter);
  if (counter === 1) {
    classing = `${classes.green} ${props.className}`;
  } else if (counter === 2) {
    classing1 = `${classes.box} ${classes.green} ${props.className}`;
  } else if (counter === 3) {
    classing2 = `${classes.box} ${classes.green} ${props.className}`;
  } else if (counter === 4) {
    classing3 = `${classes.box} ${classes.green} ${props.className}`;
  } else if (counter === 5) {
    classing4 = `${classes.box} ${classes.green} ${props.className}`;
  } else if (counter === 6) {
    classing5 = `${classes.box} ${classes.green} ${props.className}`;
  } else if (counter === 7) {
    classing6 = `${classes.box} ${classes.green} ${props.className}`;
  }

  return (
    <>
      <div className={`${classes.flow}`}>
        <div className={`${classes.box} ${classing}`}>Application</div>
        <div className={`${classes.box} ${classing1}`}>Interview</div>
        <div className={`${classes.box} ${classing2}`}>Offer</div>
        <div className={`${classes.box} ${classing3}`}>onBoarding</div>
        <div className={`${classes.box} ${classing4}`}>Hired</div>
        <div className={`${classes.box} ${classing5}`}>Hold</div>
        <div className={`${classes.box} ${classing6}`}>Rejected</div>
      </div>
      <Button
        variant="contained"
        style={{ marginLeft: "20%" }}
        onClick={handleSubmit}
      >
        Proceed
      </Button>
    </>
  );
};

export default Status;
