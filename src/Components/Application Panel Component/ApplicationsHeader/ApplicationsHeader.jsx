import React from "react";
import PageHeader from "../../../UI/PageHeader";
import classes from "./ApplicationsHeader.module.css";

const ApplicationsHeader = () => {
  return (
    <PageHeader>
      <div className={classes.title}>Applications</div>
    </PageHeader>
  );
};

export default ApplicationsHeader;
