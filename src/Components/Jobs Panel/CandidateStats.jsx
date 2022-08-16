import React from "react";
import { PieChart } from "@mui/icons-material";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import trend from "../../Assets/trend.png";
const CandidateStats = () => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  return (
    <div className="flex justify-between">
      <div className="mt-10 w-full mr-5 ">
        <span className="text-2xl font-bold flex">
          {" "}
          Candidate Statistics{" "}
          <img src={trend} alt="" className="ml-5 w-[26px]" />
        </span>
        <div className="mr-10 mt-3 rounded-md bg-white w-full min-h-[500px] flex flex-col pb-10 ">
          <div className="min-h-[100px] p-4 border-b-2 flex items-center">
            <span className="font-semibold text-xl  ">
              Basic Report <PieChart className="ml-2 w-[22px]" />{" "}
            </span>
            <button
              className="py-2 px-3 rounded-md ml-auto bg-[#8635B0] text-white outline-none hover:bg-[#722b95] border-none"
              onClick={() => navigate("/reports/candidateInspection")}
            >
              View All Reports
            </button>
          </div>
          <Outlet />
        </div>
      </div>
      <div className=" w-[400px] max-h-[270px] bg-white mt-20 ">
        <div className="w-full p-2 flex items-center bg-indigo-500 rounded-t-md">
          <span className="text-white font-semibold">Basic Report</span>
        </div>
        <div className="p-2 sticky pl-5">
          <ul className="h-[200px] flex flex-col justify-around">
            <li
              className={` ${
                pathname === "/jobs/candidate/inspection"
                  ? "border-l-4 border-indigo-600 text-indigo-700 font-semibold"
                  : ""
              }  `}
            >
              {" "}
              <Link to={"candidate/inspection"} className="ml-2">
                {" "}
                Candidate Inspections
              </Link>
            </li>
            <li
              className={` ${
                pathname === "/jobs/candidate/sources"
                  ? "border-l-4 border-indigo-600 text-indigo-700 font-semibold"
                  : ""
              }  `}
            >
              {" "}
              <Link to={"candidate/sources"} className="ml-2">
                {" "}
                Candidate Sources
              </Link>
            </li>
            <li
              className={` ${
                pathname === "/jobs/candidate/activity"
                  ? "border-l-4 border-indigo-600 text-indigo-700 font-semibold"
                  : ""
              }  `}
            >
              {" "}
              <Link to={"candidate/activity"} className="ml-2">
                {" "}
                Activity Thread
              </Link>
            </li>
            <li
              className={` ${
                pathname === "/jobs/candidate/team-tracker"
                  ? "border-l-4 border-indigo-600 text-indigo-700 font-semibold"
                  : ""
              }  `}
            >
              {" "}
              <Link to={"candidate/team-tracker"} className="ml-2">
                {" "}
                Team Tracker
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CandidateStats;
