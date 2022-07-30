import { Pie } from "react-chartjs-2";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { CategoryScale, LinearScale, BarElement, Title } from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
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
  maintainAspectRatio: false,
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
      barThickness: 16,
      minBarLength: 12,
    },
  ],
};

// Candidate Flow

const CandidateVelocoptions = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {},
    title: {
      display: true,
    },
  },
};

const CandidateVeloData = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 10000 })),
      backgroundColor: "rgb(255, 206, 86)",
      barThickness: 16,
      minBarLength: 12,
    },
  ],
};

const CandidateSurvivedata = {
  labels: ["Stage", "Stage", "Stage", "Stage", "Stage", "Stage"],
  datasets: [
    {
      label: "# of Votes",
      data: [13, 15, 16, 24, 27, 5],
      backgroundColor: [
        "rgb(139, 68, 124)",
        "rgb(98, 55, 111)",
        "rgb(7, 138, 171)",
        "rgb(39, 165, 129)",
        "rgb(150, 170, 59)",
        "rgb(240, 87, 127)",
      ],
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 ">
        <div className="max-h-[500px] w-[400px] bg-white rounded-md p-3 flex flex-col mt-3">
          <div className="flex">
            {" "}
            <span className="text-xl font-semibold"> Candidate Pipeline</span>
            <input
              type="date"
              className="ml-auto p-1"
              defaultValue="3-12-2002"
            />
          </div>
          <div className="h-full">
            <Bar options={options} data={ProductiveData} />
          </div>
        </div>

        {/* Candidate Flow*/}
        <div className="max-h-[500px]  w-[400px] bg-white rounded-md p-3 mt-3">
          <div className="flex">
            {" "}
            <span className="text-xl font-semibold"> Candidate Flow</span>
            <input
              type="date"
              className="ml-auto p-1"
              defaultValue="3-12-2002"
            />
          </div>
          <Pie className=" mt-3" data={data} />
        </div>

        {/*Candidate Velocity */}
        <div className="max-h-[500px]  w-[400px] flex flex-col bg-white rounded-md p-3 mt-3">
          <div className="flex">
            {" "}
            <span className="text-xl font-semibold">Candidate Velocity</span>
            <input
              type="date"
              className="ml-auto p-1"
              defaultValue="3-12-2002"
            />
          </div>
          <div className="h-full">
            <Bar options={CandidateVelocoptions} data={CandidateVeloData} />{" "}
          </div>
        </div>
        {/* Team Tracker */}
        <div className="max-h-[500px] w-[400px] bg-white rounded-md p-3 mt-3">
          <div className="flex">
            {" "}
            <span className="text-xl font-semibold"> Team Tracker</span>
            <input
              type="date"
              className="ml-auto p-1"
              defaultValue="3-12-2002"
            />
          </div>

          <Doughnut data={CandidateSurvivedata} />
        </div>
      </div>
    </div>
  );
};

export default ProductivityReports;
