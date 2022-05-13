import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import DropDownbar from "../../../UI/DropDownbar";
import classes from "./ReportList.module.css";

const ReportList = (props) => {
  return (
    <Link to={`${props.link}`} className={classes.link}>
      <DropDownbar className={`${props.className} ${classes.reportList} `}>
        {props.type !== "Overall" && <FontAwesomeIcon icon={faAngleRight} />}
        <span
          className={`${classes.title}  ${
            props.type === "Overall" ? "fontBig" : ""
          }`}
        >
          {props.type}
        </span>
      </DropDownbar>
    </Link>
  );
};

export default ReportList;
