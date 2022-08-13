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
      barThickness: 24,
      minBarLength: 12,
    },
  ],
};

const HeadCount = () => {
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
    <div className="mt-3  w-full h-full ">
      <div className=" p-4 flex items-center">
        <span className="font-semibold text-xl">Head Count</span>
      </div>

      <div className="flex   w-full  p-10">
        <div className="h-[500px] w-[500px] ml-auto">
          <Bar options={options} data={ProductiveData} />
        </div>
      </div>
    </div>
  );
};

export default HeadCount;
