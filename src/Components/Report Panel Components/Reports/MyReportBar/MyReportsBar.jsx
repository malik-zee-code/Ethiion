import React, { useState } from "react";

import {
  faAngleDown,
  faAngleUp,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import classes from "./MyReportsBar.module.css";
import Report from "../Report.component";

const MyReportContainer = () => {
  const [toggle, setToggle] = useState(true);

  const toggleHandler = () => {
    setToggle((prevState) => !prevState);
  };
  return (
    <div className={classes.container}>
      <Report
        icon={faHeart}
        actionIcons={[faAngleDown, faAngleUp]}
        title="My Report"
        onClick={toggleHandler}
        toggle={toggle}
      />



      {toggle && <div className={classes.dataContainer}>My Reports</div>}
    </div>
  );
};

export default MyReportContainer;
