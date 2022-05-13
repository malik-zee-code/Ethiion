import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Report from "../Report.component";
import ReportList from "../ReportList.component";
import classes from "./ReportTabs.module.css";

const ReportTabs = (props) => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <>
      <Report
        className={`${classes.containerReport}`}
        title={props.name}
        actionIcons={[faAngleDown, faAngleUp]}
        onClick={toggleHandler}
        toggle={toggle}
      />
      {toggle &&
        props.reportTypes.map((r) => (
          <ReportList
            key={Math.random()}
            className={classes.reportList}
            type={r.type}
            link={r.link}
          />
        ))}

        
    </>
  );
};

export default ReportTabs;
