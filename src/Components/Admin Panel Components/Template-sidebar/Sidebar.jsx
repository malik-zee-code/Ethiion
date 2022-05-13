import React from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./Sidebar.module.css";

const Sidebar = () => {
  const location = useLocation();

  return (
    <React.Fragment>
      <div className={classes.sidebar}>
        <div className={classes.template_label}>templates</div>
        <div className={classes.template__links}>
          <Link
            className={`${classes.link} ${
              "/admin/template/hiring-workflow" === location.pathname
                ? classes.active
                : ""
            }`}
            to="/admin/template/hiring-workflow"
          >
            hiring workflows <span className={classes.arrow}> &#8250; </span>
          </Link>
          <Link
            className={`${classes.link} ${
              "/admin/template/questionaries" === location.pathname
                ? classes.active
                : ""
            } `}
            to="/admin/template/questionaries"
          >
            Questionaries <span className={classes.arrow}> &#8250; </span>
          </Link>
          <Link
            className={`${classes.link} ${
              "/admin/template/interview" === location.pathname
                ? classes.active
                : ""
            }`}
            to="/admin/template/interview"
          >
            Interviews <span className={classes.arrow}> &#8250; </span>
          </Link>
          <Link
            className={`${classes.link} ${
              "/admin/template/evaluation" === location.pathname
                ? classes.active
                : ""
            }`}
            to="/admin/template/evaluation"
          >
            Evaluations <span className={classes.arrow}> &#8250; </span>
          </Link>
          <Link
            className={`${classes.link} ${
              "/admin/template/email" === location.pathname
                ? classes.active
                : ""
            }`}
            to="/admin/template/email"
          >
            <span>Emails</span> <span className={classes.arrow}> &#8250; </span>
          </Link>
          <Link
            className={`${classes.link} ${
              "/admin/template/category" === location.pathname
                ? classes.active
                : ""
            }`}
            to="/admin/template/category"
          >
            Categories <span className={classes.arrow}> &#8250; </span>
          </Link>
          <Link
            className={`${classes.link} ${
              "/admin/template/documents" === location.pathname
                ? classes.active
                : ""
            }`}
            to="/admin/template/documents"
          >
            Documents <span className={classes.arrow}> &#8250; </span>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
