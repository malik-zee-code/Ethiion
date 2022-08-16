import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import classes from "./Navbar.module.css";
import { faCog, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import ethiion from "../../Assets/ethiion.png";
import person from "../../Assets/person.jpeg";
import { faCalendar, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { IconButton } from "@mui/material";
import report from "../../Assets/Group 131 (6).png";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav
      className={` navbar  bg-white max-h-[100px] flex w-full items-center `}
    >
      <div className={`${classes.nav_text_links}  `}>
        <span className="ml-3 mb-4 flex w-full">
          <Link to="/" className={" flex  "}>
            <img src={ethiion} alt="" className={` w-[140px] mr-auto `} />
          </Link>
        </span>
        <ul className={`${classes.lists}`}>
          <li className={`${classes.list}  tracking-wider`}>
            <Link
              className="text-slate-500 hover:text-slate-900"
              to="/jobs/candidate/inspection"
            >
              jobs
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

          <li className={`w-[100px] h-[100px]`}>
            <Link
              className="text-slate-500 hover:text-slate-900 "
              to="/reports/candidateInspection"
            >
              <img src={report} alt="" className="w-full h-full" />
            </Link>
          </li>
          <li className={`${classes.list}  tracking-wider`}>
            <Link className="text-slate-500 hover:text-slate-900" to="#">
              Employees
            </Link>
          </li>
        </ul>
      </div>
      <div className={`${classes.nav__link__icons}  justify-end mb-3`}>
        <div className="bg-slate-200 px-3 rounded-md">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="mr-2 text-zinc-400"
          />
          <input
            type="text"
            className="p-3 text-sm tracking-wider w-[250px] outline-none bg-slate-200 rounded-md mr-3"
            placeholder="Search"
          />
        </div>
        <ul className={`${classes.nav__list__icons} ml-4`}>
          <li className="mr-4">
            <IconButton>
              <FontAwesomeIcon icon={faEnvelope} className="h-7" />
            </IconButton>
          </li>
          <li className="mr-4">
            <IconButton>
              <FontAwesomeIcon icon={faCalendar} className="h-7" />
            </IconButton>
          </li>
          <li className="mr-4">
            <IconButton
              onClick={() => navigate("/admin/template/hiring-workflow")}
            >
              <FontAwesomeIcon icon={faCog} className="h-7" />
            </IconButton>
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
