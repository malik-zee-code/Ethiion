import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Pie } from "react-chartjs-2";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { CategoryScale, LinearScale, BarElement, Title } from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

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

// Candidate Pipeline Reports

const options = {
  responsive: true,
  plugins: {
    legend: {},
    title: {
      display: true,
    },
  },
};

const labels = ["January", "February", "March", "April"];

const ProductiveData = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 10000 })),
      backgroundColor: "rgb(113, 194, 133)",
    },
  ],
};

const ProductivityReports = () => {
  ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    Title
  );

  return (
    <div className="mr-10 mt-3 rounded-md w-full min-h-[400px] ">
      <div className="min-h-[100px] p-4 flex items-center">
        <span className="font-semibold text-xl  ">Productivity Report</span>
      </div>

      {/* Candidate Pipeline */}

      <div className="grid grid-cols-4  p-4 ">
        <div className="min-h-[400px] w-[400px] bg-white rounded-md p-3 flex flex-col">
          <div className="flex">
            {" "}
            <span className="text-xl font-semibold"> Candidate Pipeline</span>
            <input
              type="date"
              className="ml-auto p-1"
              defaultValue="3-12-2002"
            />
          </div>

          <Bar options={options} data={ProductiveData} className="h-full" />
        </div>

        {/* candidate Source */}
        <div className="min-h-[400px] w-[400px] bg-white rounded-md p-3">
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
        <div className="min-h-[400px] w-[400px] bg-white rounded-md p-3">
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
        <div className="min-h-[400px] w-[400px] bg-white rounded-md p-3">
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

export default ProductivityReports;
