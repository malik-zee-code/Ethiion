import { faAngleDown, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton } from "@mui/material";
import React from "react";
import BasicReports from "./BasicReports";
import EmployeeBasicReport from "./EmployeeBasicReport";
import OtherReports from "./OtherReports";
import ProductivityReports from "./ProductivityReports";
import TimingReports from "./TimingReports";

const ReportComp = () => {
  return (
    <div className="p-20">
      <div className="mt-10">
        <div className="flex justify-between">
          <span className="text-2xl font-semibold">Reports</span>
          <button className="btn bg-[#02A882] text-white outline-none hover:bg-[#038466] border-none">
            Create Custom Reports
          </button>
        </div>

        <div className="mt-10 bg-white">
          <div className="flex justify-between p-10 rounded-xl">
            <span className="text-xl font-semibold">Candidate</span>

            <IconButton>
              <FontAwesomeIcon icon={faAngleDown} />
            </IconButton>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full border-separate border-spacing-7">
              {/* <!-- head --> */}
              <thead className="">
                <tr>
                  <th>Report Name</th>
                  <th>Report Description</th>
                  <th>Last Viewing</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* <!-- row 1 --> */}
                <tr>
                  <td className="underline text-[#959595] italic">
                    Report Name
                  </td>
                  <td>Quality Control Specialist</td>
                  <td>25 Oct, 2022</td>
                  <td>
                    <IconButton>
                      <FontAwesomeIcon icon={faTrash} />
                    </IconButton>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <BasicReports />
      <ProductivityReports />

      <div className="flex min-h-[800px]">
        <TimingReports />
        <OtherReports />
      </div>

      <div className="w-full h-[100px] bg-[#02a882] text-3xl  rounded-xl flex items-center justify-center">
        <span className="text-white font-bold">Employee Report</span>
      </div>

      <EmployeeBasicReport />
    </div>
  );
};

export default ReportComp;
