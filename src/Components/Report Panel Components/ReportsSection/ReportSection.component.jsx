import React, { useState } from "react";
import Report from "../Reports/Report.component";
import classes from "./ReportSection.module.css";

const ReportSection = (props) => {
  const [toggle, setToggle] = useState(true);

  const toggleHandler = (props) => {
    setToggle((prevState) => !prevState);
  };
  return (
    <div className={classes.container}>
      <Report
        className={`${classes.containerReport}`}
        title={props.title}
        actionIcons={props.actionIcons}
        onClick={toggleHandler}
        toggle={toggle}
        icon={props.icon}
      />
      {toggle && <div className={classes.dataContainer}>{props.children}</div>}
    </div>
  );
};

export default ReportSection;
