import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import classes from "./Navbar.module.css";
import {
  faCog,
  faInbox,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ethiion from "../../Assets/ethiion.png";
import person from "../../Assets/person.jpeg";
import { faCalendar, faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
  return (
    <nav className={` navbar  bg-white h-[100px] `}>
      <div className={`${classes.nav_text_links} `}>
        <Link to="/" className={classes.link_logo}>
          <img src={ethiion} alt="" className={`${classes.ethiion} m-3`} />
        </Link>
        <ul className={`${classes.lists}`}>
          <li className={`${classes.list}  tracking-wider`}>
            <Link className="text-slate-500 hover:text-slate-900" to="/jobs">
              jobs
            </Link>
          </li>
          <li className={`${classes.list} tracking-wider`}>
            <Link
              className="text-slate-500 hover:text-slate-900"
              to="/applications"
            >
              Applications
            </Link>
          </li>
          <li className={`${classes.list}  tracking-wider`}>
            <Link
              className="text-slate-500 hover:text-slate-900"
              to="/candidate"
            >
              candidates
            </Link>
          </li>

          <li className={`${classes.list}  tracking-wider`}>
            <Link className="text-slate-500 hover:text-slate-900" to="/reports">
              reports
            </Link>
          </li>
          <li className={`${classes.list}  tracking-wider`}>
            <Link
              className="text-slate-500 hover:text-slate-900"
              to="/admin/template/hiring-workflow"
            >
              admin
            </Link>
          </li>
        </ul>
      </div>
      <div className={classes.nav__link__icons}>
        <input
          type="text"
          className="p-3 text-sm tracking-wider w-[300px] outline-none bg-slate-200 rounded-md mr-3"
          placeholder="Search"
        />
        <ul className={classes.nav__list__icons}>
          <li className="">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </li>

          <li className={classes.list__icons}>
            <Link className="" to="/">
              <FontAwesomeIcon icon={faInbox} /> 0
            </Link>
          </li>
          <li className="mr-8">
            <FontAwesomeIcon icon={faEnvelope} className="h-7" />
          </li>
          <li className="mr-8">
            <FontAwesomeIcon icon={faCalendar} className="h-7" />
          </li>
          <li className="mr-8">
            <FontAwesomeIcon icon={faCog} className="h-7" />
          </li>

          <li>
            <img
              src={person}
              alt=""
              className="rounded-full w-14 h-14  object-cover"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
