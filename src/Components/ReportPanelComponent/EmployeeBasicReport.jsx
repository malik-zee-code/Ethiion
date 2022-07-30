import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { faker } from "@faker-js/faker";
import {
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  PointElement,
  LineElement,
  LineController,
  BarController,
} from "chart.js";
import { Bar } from "react-chartjs-2";

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

const labels = ["January", "February", "March"];

const ProductiveData = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 10000 })),
      backgroundColor: "rgb(232, 74, 135)",
      barThickness: 16,
      minBarLength: 12,
    },
  ],
};

// Entry Data

const Entrylabels = [
  "organization",
  "organization",
  "organization",
  "organization",
  "organization",
];

const data = {
  labels: Entrylabels,
  datasets: [
    {
      label: "Dataset 1",
      data: Entrylabels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgb(2, 168, 130)",
      barThickness: 20,
    },
    {
      label: "Dataset 2",
      data: Entrylabels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgb(240, 120, 90)",
      barThickness: 20,
    },
  ],
};

const Entryoptions = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {},
    title: {
      display: true,
    },
  },
};
const EmployeeBasicReport = () => {
  ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    PointElement,
    LineElement,
    LineController,
    BarController
  );
  return (
    <div className="w-full min-h-[600px] flex flex-col mt-10">
      {/* Basic Reports */}
      <div className="w-full">
        <h1 className="text-xl font-semibold">Basic Reports</h1>

        <div className="mt-4 flex w-full ">
          <div className="min-h-[400px] w-[550px] bg-white rounded-md p-3">
            <div className="flex">
              {" "}
              <span className="text-xl font-semibold">Head Count</span>
              <input
                type="date"
                className="ml-auto p-1"
                defaultValue="3-12-2002"
              />
            </div>
            <div className="h-[400px]">
              <Bar options={options} data={ProductiveData} />
            </div>
          </div>

          <div className="min-h-[400px] w-full bg-white rounded-md p-3 ml-4">
            <div className="flex">
              {" "}
              <span className="text-xl font-semibold">
                Entry and Termination
              </span>
              <input
                type="date"
                className="ml-auto p-1"
                defaultValue="3-12-2002"
              />
            </div>
            <div className="h-[400px]">
              <Bar options={Entryoptions} data={data} />
            </div>
          </div>
        </div>
      </div>

      {/* Productivity Reports */}
      <div className="mt-4">
        <h1 className="text-xl font-semibold">Productivity Reports</h1>

        <div className="min-h-[400px] w-[400px] bg-white rounded-md p-3 mt-4 ml-4">
          <div className="flex">
            {" "}
            <span className="text-xl font-semibold">Employee</span>
            <input
              type="date"
              className="ml-auto p-1"
              defaultValue="3-12-2002"
            />
          </div>
          <div className="h-[400px] ">
            <Bar options={options} data={ProductiveData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeBasicReport;
