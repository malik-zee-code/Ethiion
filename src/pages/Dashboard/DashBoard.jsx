import React from "react";
import DashboardCard from "../../UI/DashboardCard";
import classes from "./Dashboard.module.css";

const DashBoard = () => {
  return (
    <div className={classes.DashBoard}>
      <div className="container">
        <div className="fs-4 my-3 mb-4">DashBoard</div>
        <div className="row ">
          <DashboardCard className="col-md-4 me-4 my-1">
            <div className="fs-4 d-flex">69,700</div>
          </DashboardCard>
          <DashboardCard className="col-md-7 my-1"></DashboardCard>
        </div>
        <div className="row my-3">
          <DashboardCard className="col-md-7 me-4 my-1"></DashboardCard>
          <DashboardCard className="col-md-4 my-1"></DashboardCard>
        </div>
        {/* <div className="row">
          <DashboardCard className="col-md-6" />
        </div> */}
      </div>
    </div>
  );
};

export default DashBoard;
