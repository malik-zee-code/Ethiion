import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Legend, Tooltip as Tip } from "chart.js";
import { Group } from "@mui/icons-material";
import { Tooltip } from "@mui/material";

const labels = [
  "Ethiion Job Board (Majority Share) ",
  "Indeed",
  "Glassdoor",
  "LinkedIn",
  "CaribbeanJobs",
];
const data = {
  labels,
  datasets: [
    {
      label: "# of Votes",
      data: [45, 10, 15, 5, 25],
      backgroundColor: [
        "rgb(102, 153, 102)",
        "rgb(148, 185, 203)",
        "rgb(255, 206, 86)",
        "rgb(7, 138, 171)",
        "rgb(153, 51, 102)",
      ],
    },
  ],
};
const Sources = () => {
  ChartJS.register(ArcElement, Tip, Legend);

  return (
    <>
      <div className="m-10 text-xl font-semibold">
        Candidate Sources{" "}
        <Tooltip
          title="
          Locate where all your candidates are coming from.
      "
          arrow
          placement="right-start"
        >
          <Group className="ml-5" />
        </Tooltip>{" "}
      </div>

      <div className="flex w-full justify-center items-center ">
        {" "}
        <div className="w-[400px]">
          <Doughnut data={data} />
        </div>
      </div>
    </>
  );
};

export default Sources;
