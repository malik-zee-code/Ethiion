import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton } from "@mui/material";
import React from "react";

const CardsAutomation = ({ title }) => {
  return (
    <div className="flex p-10 flex-col w-[250px] h-[400px] items-center bg-white rounded-xl shadow-lg mt-3">
      <span className="text-lg font-semibold">{title}</span>

      <div className="mt-auto flex flex-col justify-center items-center ">
        <IconButton
          aria-label="delete"
          className="w-[50px] h-[50px] bg-[#8635B0] hover:bg-[#a131d8] rounded-full flex items-center justify-center mr-4"
        >
          <FontAwesomeIcon
            icon={faPlus}
            className="w-[30px] h-[30px] text-white "
          />
        </IconButton>{" "}
        <span className="text-xl font-semibold mt-4">Automation</span>
      </div>
    </div>
  );
};

export default CardsAutomation;
