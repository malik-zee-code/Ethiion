import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const OtherReports = () => {
  return (
    <div className="mr-10 mt-3 rounded-md w-full h-full  ">
      <div className="min-h-[100px] p-4 flex items-center">
        <span className="font-semibold text-xl  ">Other Report</span>
      </div>

      <div className="max-h-[500px] overflow-y-scroll w-full bg-white rounded-md p-3">
        <div className="flex">
          <span className="text-xl font-semibold"> Refferals</span>
          <input type="date" className="ml-auto p-1" defaultValue="3-12-2002" />
        </div>

        <div className="mt-2 flex p-6 items-center">
          <div className="w-[70px] h-[70px] bg-[#8635B0] rounded-full flex items-center justify-center mr-4  shadow-lg">
            <FontAwesomeIcon
              icon={faBell}
              className="w-[30px] h-[30px] text-white"
            />
          </div>{" "}
          <div className="flex flex-col">
            <span className="text-xl font-semibold ">
              You have Earned Points
            </span>
            <span>Ali Khan Joined your Refferals Links</span>
          </div>
        </div>
        <div className="mt-2 flex p-6 items-center">
          <div className="w-[70px] h-[70px] bg-[#8635B0] rounded-full flex items-center justify-center mr-4  shadow-lg">
            <FontAwesomeIcon
              icon={faBell}
              className="w-[30px] h-[30px] text-white"
            />
          </div>{" "}
          <div className="flex flex-col">
            <span className="text-xl font-semibold ">
              You have Earned Points
            </span>
            <span>Ali Khan Joined your Refferals Links</span>
          </div>
        </div>

        <div className="mt-2 flex p-6 items-center">
          <div className="w-[70px] h-[70px] bg-[#8635B0] rounded-full flex items-center justify-center mr-4  shadow-lg">
            <FontAwesomeIcon
              icon={faBell}
              className="w-[30px] h-[30px] text-white"
            />
          </div>{" "}
          <div className="flex flex-col">
            <span className="text-xl font-semibold ">
              You have Earned Points
            </span>
            <span>Ali Khan Joined your Refferals Links</span>
          </div>
        </div>

        <div className="mt-2 flex p-6 items-center">
          <div className="w-[70px] h-[70px] bg-[#8635B0] rounded-full flex items-center justify-center mr-4  shadow-lg">
            <FontAwesomeIcon
              icon={faBell}
              className="w-[30px] h-[30px] text-white"
            />
          </div>{" "}
          <div className="flex flex-col">
            <span className="text-xl font-semibold ">
              You have Earned Points
            </span>
            <span>Ali Khan Joined your Refferals Links</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherReports;
