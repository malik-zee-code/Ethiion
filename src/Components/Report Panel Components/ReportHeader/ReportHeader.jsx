import React from "react";
import Button from "../../../UI/button/Button";
import PageHeader from "../../../UI/PageHeader";
import classes from "./ReportHeader.module.css";
const ReportHeader = () => {
  return (
    <PageHeader>
      <div className={classes.header}>
        <div className={classes.title}> Reports</div>
        <div className={classes.btn}>
          <Button className={classes.button}>+ Create custom report</Button>
        </div>
      </div>
    </PageHeader>
  );
};

export default ReportHeader;
