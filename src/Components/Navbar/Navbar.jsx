import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import classes from "./Navbar.module.css";
import {
  faCalendarDays,
  faCheck,
  faCircleQuestion,
  faEye,
  faInbox,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ethiion from "../../Assets/ethiion.png";
import logo1 from "../../Assets/Logo1.png";

const Navbar = () => {
  return (
    <nav className={` navbar ${classes.navbar} `}>
      <div className={`${classes.nav_text_links} `}>
        <div className={classes.logo}>
          <Link to="/" className={classes.link_logo}>
            <img src={ethiion} alt="" className={classes.ethiion} />
            {/* Ethiion */}
          </Link>
        </div>
        <ul className={`${classes.lists}`}>
          <li className={`${classes.list} navbar-item`}>
            <Link className={classes.link} to="/applications">
              Applications
            </Link>
          </li>
          <li className={classes.list}>
            <Link className={classes.link} to="/candidate">
              candidates
            </Link>
          </li>

          <li className={classes.list}>
            <Link className={classes.link} to="/reports">
              reports
            </Link>
          </li>
          <li className={classes.list}>
            <Link className={classes.link} to="/admin/template/hiring-workflow">
              admin
            </Link>
          </li>
        </ul>
      </div>
      <div className={classes.nav__link__icons}>
        <ul className={classes.nav__list__icons}>
          <li className={classes.list__icons}>
            <Link className={classes.link} to="/">
              <FontAwesomeIcon icon={faEye} /> 1
            </Link>
          </li>
          <li className={classes.list__icons}>
            <Link className={classes.link} to="/">
              <FontAwesomeIcon icon={faCheck} /> 0
            </Link>
          </li>
          <li className={classes.list__icons}>
            <Link className={classes.link} to="/">
              <FontAwesomeIcon icon={faCalendarDays} /> 1
            </Link>{" "}
          </li>
          <li className={classes.list__icons}>
            <Link className={classes.link} to="/">
              <FontAwesomeIcon icon={faInbox} /> 0
            </Link>
          </li>

          <li className={classes.list__icons}>
            <Link className={classes.link} to="/">
              <FontAwesomeIcon icon={faCircleQuestion} />
            </Link>
          </li>
          <li className={classes.list__icons}>
            <Link className={classes.link} to="/">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Link>
          </li>
        </ul>

        {/* <ul className={classes.query}></ul> */}
      </div>
    </nav>
  );
};

export default Navbar;
