import React from "react";
import classes from "./PageHeader.module.css";
const PageHeader = (props) => {
  return (
    <div className={`${classes.PageHeader} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default PageHeader;
