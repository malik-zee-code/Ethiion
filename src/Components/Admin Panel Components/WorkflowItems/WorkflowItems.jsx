import { faCaretDown, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "../../../UI/button/Button";
// import Button from "../../JSXCustomComponents/button/Button";
import classes from "./WorkflowItems.module.css";

const WorkflowItems = (props) => {
  return (
    <div className={classes.workflow}>
      <div className={classes.workflow__title}>{props.workflow}</div>
      <div className={classes.jobs_use}>Used by {props.jobsUsed} Jobs</div>
      <div className={classes.workflow__actions}>
        <Button>
          <FontAwesomeIcon icon={faPencil} />
        </Button>
        <div className={classes.hr}></div>
        <Button>
          <FontAwesomeIcon icon={faCaretDown} />
        </Button>
      </div>
    </div>
  );
};

export default WorkflowItems;
