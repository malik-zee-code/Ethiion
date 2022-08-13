import { Close, NotificationsActive } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

const Alert = ({ title, btnTitle, btnClassName, titleClassName }) => {
  return (
    <div className="max-h-[100px] flex items-center bg-white border-b-2 rounded-none p-4">
      {" "}
      <div className="w-[50px] h-[50px] bg-[#8635B0] rounded-full flex items-center justify-center ">
        <NotificationsActive className="text-white" />
      </div>{" "}
      <span className={`${titleClassName} ml-3`}>{title}</span>
      <div className="ml-auto flex items-center">
        <button className={`bg-[#F3F3F3] p-1 rounded-md mr-5 ${btnClassName}`}>
          {btnTitle}
        </button>
        <IconButton className="  ">
          <Close />
        </IconButton>
      </div>
    </div>
  );
};

export default Alert;
