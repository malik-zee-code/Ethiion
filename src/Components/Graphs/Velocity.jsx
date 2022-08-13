import { faker } from "@faker-js/faker";
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { CategoryScale, LinearScale, BarElement, Title } from "chart.js";

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

const labels = [
  "Agency",
  "Website",
  "LinkedIn",
  "Career Fair",
  "Direct Sourcing",
];
const ProductiveData = {
  labels,
  datasets: [
    {
      label: "Volume Ranking",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 10000 })),
      backgroundColor: "rgb(251, 193, 22)",
      barThickness: 24,
      minBarLength: 12,
    },
  ],
};
const Velocity = () => {
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
    <div className="h-full  w-full  mt-3">
      <div className=" p-4 flex items-center">
        <span className="font-semibold text-xl">Candidate Velocity</span>
      </div>
      <div className="h-[500px] w-[500px] ml-auto">
        <Bar options={options} data={ProductiveData} />
      </div>
    </div>
  );
};

export default Velocity;
