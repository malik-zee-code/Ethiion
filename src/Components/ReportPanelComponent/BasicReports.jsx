import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import person from "../../Assets/person.jpeg";
import { Pie } from "react-chartjs-2";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

const data = {
  labels: ["Green", "Black", "Yellow", "Purple"],
  datasets: [
    {
      label: "# of Votes",
      data: [19, 9, 17, 2],
      backgroundColor: [
        "rgb(102, 153, 102)",
        "rgb(51, 51, 51)",
        "rgb(255, 206, 86)",
        "rgb(153, 51, 102)",
      ],
    },
  ],
};
const BasicReports = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  return (
    <div className="mr-10 mt-3 rounded-md w-full min-h-[400px] ">
      <div className="min-h-[100px] p-4 flex items-center">
        <span className="font-semibold text-xl  ">Basic Report</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  p-4 ">
        <div className="min-h-[400px] w-[400px] bg-white rounded-md p-3 mt-3">
          <div className="flex">
            {" "}
            <span className="text-xl font-semibold">
              {" "}
              Candidate Inspections
            </span>
            <input
              type="date"
              className="ml-auto p-1"
              defaultValue="3-12-2002"
            />
          </div>

          <div className="flex flex-col h-full mt-4">
            <div className="flex">
              <img
                src={person}
                alt=""
                className="object-cover rounded-full h-[70px] w-[70px] mr-4"
              />
              <div className="flex flex-col justify-center">
                <span className="font-semibold">Julia Robert</span>
                <span className="text-slate-500">Hiring Manager</span>
              </div>
            </div>
            <div className="flex mt-2">
              <img
                src={person}
                alt=""
                className="object-cover rounded-full h-[70px] w-[70px] mr-4"
              />
              <div className="flex flex-col justify-center">
                <span className="font-semibold">Julia Robert</span>
                <span className="text-slate-500">Hiring Manager</span>
              </div>
            </div>{" "}
            <div className="flex mt-2">
              <img
                src={person}
                alt=""
                className="object-cover rounded-full h-[70px] w-[70px] mr-4"
              />
              <div className="flex flex-col justify-center">
                <span className="font-semibold">Julia Robert</span>
                <span className="text-slate-500">Hiring Manager</span>
              </div>
            </div>{" "}
            <div className="flex mt-2">
              <img
                src={person}
                alt=""
                className="object-cover rounded-full h-[70px] w-[70px] mr-4"
              />
              <div className="flex flex-col justify-center">
                <span className="font-semibold">Julia Robert</span>
                <span className="text-slate-500">Hiring Manager</span>
              </div>
            </div>
          </div>
        </div>

        {/* candidate Source */}
        <div className="min-h-[400px] w-[400px] bg-white rounded-md p-3 mt-3">
          <div className="flex">
            {" "}
            <span className="text-xl font-semibold"> Candidate Source</span>
            <input
              type="date"
              className="ml-auto p-1"
              defaultValue="3-12-2002"
            />
          </div>
          <Pie className=" mt-3" data={data} />
        </div>

        {/* Activity Thread */}
        <div className="min-h-[400px] w-[400px] bg-white rounded-md p-3 mt-3">
          <div className="flex">
            {" "}
            <span className="text-xl font-semibold"> Activity Thread</span>
            <input
              type="date"
              className="ml-auto p-1"
              defaultValue="3-12-2002"
            />
          </div>

          <div className="flex flex-col h-full mt-4">
            <div className="flex">
              <div className=" flex items-center justify-center h-[70px] w-[70px] bg-white rounded-full border-b-[3px]">
                <FontAwesomeIcon
                  icon={faBell}
                  className=" w-full h-[30px] rounded-full "
                />
              </div>
              <div className="flex flex-col justify-center ml-4">
                <span className="font-semibold">Launch Date</span>
                <span className="text-slate-500">SPB Project</span>
              </div>
            </div>
            <div className="flex mt-3">
              <div className=" flex items-center justify-center h-[70px] w-[70px] bg-white rounded-full border-b-[3px]">
                <FontAwesomeIcon
                  icon={faBell}
                  className=" w-full h-[30px] rounded-full "
                />
              </div>
              <div className="flex flex-col justify-center ml-4">
                <span className="font-semibold">New Application HR</span>
                <span className="text-slate-500">Hiring Manager</span>
              </div>
            </div>
            <div className="flex mt-3">
              <div className=" flex items-center justify-center h-[70px] w-[70px] bg-white rounded-full border-b-[3px]">
                <FontAwesomeIcon
                  icon={faBell}
                  className=" w-full h-[30px] rounded-full "
                />
              </div>
              <div className="flex flex-col justify-center ml-4">
                <span className="font-semibold">23 New Applications</span>
                <span className="text-slate-500">Software Engeenering</span>
              </div>
            </div>
            <div className="flex mt-3">
              <div className=" flex items-center justify-center h-[70px] w-[70px] bg-white rounded-full border-b-[3px]">
                <FontAwesomeIcon
                  icon={faBell}
                  className=" w-full h-[30px] rounded-full "
                />
              </div>
              <div className="flex flex-col justify-center ml-4">
                <span className="font-semibold">Interview is Scheduled</span>
                <span className="text-slate-500">HR Manager</span>
              </div>
            </div>
          </div>
        </div>
        {/* Team Tracker */}
        <div className="min-h-[400px] w-[400px] bg-white rounded-md p-3 mt-3">
          <div className="flex">
            {" "}
            <span className="text-xl font-semibold"> Team Tracker</span>
            <input
              type="date"
              className="ml-auto p-1"
              defaultValue="3-12-2002"
            />
          </div>

          <div className="flex flex-col h-full mt-4">
            <div className="flex">
              <div className=" flex items-center justify-center h-[70px] w-[70px] bg-white rounded-full border-b-[3px]">
                <FontAwesomeIcon
                  icon={faBell}
                  className=" w-full h-[30px] rounded-full "
                />
              </div>
              <div className="flex flex-col justify-center ml-4">
                <span className="font-semibold">Launch Date</span>
                <span className="text-slate-500">SPB Project</span>
              </div>
            </div>
            <div className="flex mt-3">
              <div className=" flex items-center justify-center h-[70px] w-[70px] bg-white rounded-full border-b-[3px]">
                <FontAwesomeIcon
                  icon={faBell}
                  className=" w-full h-[30px] rounded-full "
                />
              </div>
              <div className="flex flex-col justify-center ml-4">
                <span className="font-semibold">New Application HR</span>
                <span className="text-slate-500">Hiring Manager</span>
              </div>
            </div>
            <div className="flex mt-3">
              <div className=" flex items-center justify-center h-[70px] w-[70px] bg-white rounded-full border-b-[3px]">
                <FontAwesomeIcon
                  icon={faBell}
                  className=" w-full h-[30px] rounded-full "
                />
              </div>
              <div className="flex flex-col justify-center ml-4">
                <span className="font-semibold">23 New Applications</span>
                <span className="text-slate-500">Software Engeenering</span>
              </div>
            </div>
            <div className="flex mt-3">
              <div className=" flex items-center justify-center h-[70px] w-[70px] bg-white rounded-full border-b-[3px]">
                <FontAwesomeIcon
                  icon={faBell}
                  className=" w-full h-[30px] rounded-full "
                />
              </div>
              <div className="flex flex-col justify-center ml-4">
                <span className="font-semibold">Interview is Scheduled</span>
                <span className="text-slate-500">HR Manager</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicReports;
