import {
  faAngleDown,
  faAngleUp,
  faArchive,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Report from "../Report.component";
import classes from "./LegacyReport.module.css";

const LegacyReport = () => {
  const [toggle, setToggle] = useState(true);

  const toggleHandler = () => {
    setToggle((prevState) => !prevState);
  };
  return (
    <div className={classes.container}>
      <Report
        icon={faArchive}
        actionIcons={[faAngleDown, faAngleUp]}
        title="Legacy Report"
        onClick={toggleHandler}
        toggle={toggle}
      />

      {toggle && <div className={classes.dataContainer}>Legacy Reports</div>}
    </div>
  );
};

export default LegacyReport;
