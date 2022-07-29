import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Alert = ({ title, btnTitle }) => {
  return (
    <div className="min-h-[100px] flex items-center bg-white border-b-2 rounded-none p-4">
      {" "}
      <div className="w-[70px] h-[70px] bg-[#8635B0] rounded-full flex items-center justify-center mr-4">
        <FontAwesomeIcon
          icon={faBell}
          className="w-[30px] h-[30px] text-white "
        />
      </div>{" "}
      <span className="text-xl">{title}</span>
      <div className="ml-auto flex items-center">
        <button className="bg-[#F3F3F3] p-2 rounded-md mr-5">{btnTitle}</button>
        <button className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Alert;
