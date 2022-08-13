import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { faker } from "@faker-js/faker";

const labels = ["Full time", "Part Time", "Intern", "Job Holders", "Staff"];
const data = {
  labels,
  datasets: [
    {
      label: "# of Votes",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 99 })),
      backgroundColor: [
        "rgb(102, 153, 102)",
        "rgb(148, 185, 203)",
        "rgb(255, 206, 86)",
        "rgb(153, 51, 102)",
        "rgb(7, 138, 171)",
      ],
    },
  ],
};
const Survival = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  return (
    <>
      <div className="m-10 text-xl font-semibold">Candidate Survival</div>
      <div className="flex  w-full justify-center items-center p-10 ">
        {" "}
        <div className="w-[400px]">
          <Doughnut data={data} />
        </div>
      </div>
    </>
  );
};

export default Survival;
