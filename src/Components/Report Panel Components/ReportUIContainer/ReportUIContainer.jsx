import React from "react";
import LegacyReport from "../Reports/LegacyReport/LegacyReport";
import MyReportContainer from "../Reports/MyReportBar/MyReportsBar";
import StandardReports from "../Reports/StandardReports/StandardReports";
import LegacyReportSec from "../ReportsSection/LegacyReportSec/LegacyReportSec";
import MyReportSection from "../ReportsSection/MyReportSection/MyReportSection";
import SecondaryReportSec from "../ReportsSection/SecondaryReportSec/SecondaryReportSec";
import classes from "./ReportUIContainer.module.css";
const ReportUIContainer = () => {
  return (
    <div className={`${classes.container}`}>
      <div className={classes.reportSidebarContainer}>
        <MyReportContainer />
        <StandardReports />
        <LegacyReport />
      </div>

      <div className={classes.reportDetailContainer}>
        <MyReportSection />
        <SecondaryReportSec />
        <LegacyReportSec />
      </div>
    </div>
  );
};

export default ReportUIContainer;
