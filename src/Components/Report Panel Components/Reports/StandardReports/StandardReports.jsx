import {
  faAngleDown,
  faAngleUp,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Report from "../Report.component";
import ReportTabs from "../ReportTabs/ReportTabs";
import classes from "./StandardReports.module.css";

const DUMMY_SECREPORT = [
  {
    name: "Source Quality",
    reportTypes: [
      { type: "Overall", link: "/source-quality/overall" },
      { type: "by Source", link: "source-quality/source" },
      { type: "by Department", link: "source-quality/department" },
      {
        type: "by Hiring Manager",
        link: "source-quality/hiring-manager",
      },
      { type: "by Recruiter", link: "source-quality/recruiter" },
      { type: "by Job Board", link: "source-quality/job-board" },
      { type: "by Refferer", link: "source-quality/refferer" },
    ],
  },
  {
    name: "Application Conversion",
    reportTypes: [{ type: "by Job", link: "application-conversion/job" }],
  },
  {
    name: "Hiring Pipeline",
    reportTypes: [
      { type: "by Job", link: "hiring-pipeline/job" },
      { type: "by Department", link: "hiring-pipeline/department" },
      { type: "by Hiring Manager", link: "hiring-pipeline/hiring-manager" },
    ],
  },
  {
    name: "Interviews",
    reportTypes: [
      { type: "by Job", link: "interviews/job" },
      { type: "by Department", link: "interviews/department" },
      { type: "by Canidate", link: "interviews/canidate" },
      { type: "by Hiring Manager", link: "interviews/hiring-manager" },
    ],
  },
  {
    name: "Offers",
    reportTypes: [
      { type: "by Job", link: "offers/job" },
      { type: "by Department", link: "offers/department" },
      { type: "by Hiring Manager", link: "offers/hiring-manager" },
      { type: "by Canidate", link: "offers/canidate" },
    ],
  },
  {
    name: "time to fill",
    reportTypes: [],
  },
  {
    name: "time to hire",
    reportTypes: [
      { type: "by Job", link: "time-to-hire/job" },
      { type: "by Department", link: "time-to-hire/department" },
      { type: "by Canidate", link: "time-to-hire/hiring-manager" },
    ],
  },
];

const StandardReports = () => {
  const [toggle, setToggle] = useState(true);

  const toggleHandler = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <div className={classes.container}>
      <Report
        icon={faChartBar}
        actionIcons={[faAngleDown, faAngleUp]}
        title="Secondary Report"
        onClick={toggleHandler}
        toggle={toggle}
      />

      {toggle && (
        <div className={`${classes.container} `}>
          {DUMMY_SECREPORT.map((r) => {
            return (
              <>
                <ReportTabs
                  key={Math.random()}
                  name={r.name}
                  reportTypes={r.reportTypes}
                />
              </>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default StandardReports;
