import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { faker } from "@faker-js/faker";

const labels = ["Green", "Black", "Yellow", "Purple"];
const data = {
  labels,
  datasets: [
    {
      label: "# of Votes",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 99 })),
      backgroundColor: [
        "rgb(102, 153, 102)",
        "rgb(51, 51, 51)",
        "rgb(255, 206, 86)",
        "rgb(153, 51, 102)",
      ],
    },
  ],
};

const TeamTracker = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  return (
    <div className="flex h-full  w-full justify-center items-center p-10 ">
      {" "}
      <div className="w-[400px]">
        <Doughnut data={data} className="" />
      </div>
    </div>
  );
};

export default TeamTracker;
