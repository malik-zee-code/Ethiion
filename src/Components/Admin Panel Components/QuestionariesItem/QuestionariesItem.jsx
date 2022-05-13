import {
  faBoxArchive,
  faCopy,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "../../../UI/button/Button";
import classes from "./QuestionariesItem.module.css";

const QuestionariesItem = (props) => {
  return (
    <div className={classes.workflow}>
      <div className={classes.workflow__title}>{props.questions}</div>
      <div className={classes.workflow__actions}>
        <Button>
          <FontAwesomeIcon icon={faPencil} />
        </Button>
        <div className={classes.hr}></div>
        <Button>
          <FontAwesomeIcon icon={faCopy} />
        </Button>
        <div className={classes.hr}></div>
        <Button>
          <FontAwesomeIcon icon={faBoxArchive} />
        </Button>
      </div>
    </div>
  );
};

export default QuestionariesItem;
