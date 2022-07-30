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
import { Chart } from "react-chartjs-2";

const labels = ["January", "February", "March", "April"];

const dataProp = labels.map(() =>
  faker.datatype.number({ min: 0, max: 10000 })
);

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      type: "line",
      borderColor: "rgb(98, 55, 111)",
      data: dataProp,
    },
    {
      label: labels,
      type: "bar",
      backgroundColor: "rgb(240, 120, 90)",
      barThickness: 20,
      data: dataProp,
    },
  ],
};

const options = {
  maintainAspectRatio: false,
};
const TimingReports = () => {
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
    <div className="mt-3 rounded-md w-[600px] min-h-[500px]  ">
      <div className="min-h-[100px] p-4 flex items-center">
        <span className="font-semibold text-xl  ">Timing Report</span>
      </div>

      <div className="min-h-[400px] w-[400px] bg-white rounded-md p-3">
        <div className="flex">
          {" "}
          <span className="text-xl font-semibold"> Time to Hire</span>
          <input type="date" className="ml-auto p-1" defaultValue="3-12-2002" />
        </div>
        <div className="h-[400px]">
          <Chart type="bar" data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default TimingReports;
