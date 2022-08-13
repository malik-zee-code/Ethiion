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
const EntryandTermination = () => {
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
        <span className="font-semibold text-xl">Entry and Termination</span>
      </div>

      <div className="flex   w-full  p-10">
        <div className="h-[500px] w-[500px] ml-auto">
          <Bar options={Entryoptions} data={data} />
        </div>
      </div>
    </div>
  );
};

export default EntryandTermination;
