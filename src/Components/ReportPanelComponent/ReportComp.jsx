import {
  Category,
  CreateNewFolder,
  PieChart,
  Search,
  Timeline,
} from "@mui/icons-material";
import { IconButton, InputBase, List, ListSubheader } from "@mui/material";
import React from "react";
import DropdownComp from "./DropdownComp";
import {
  CandidateBasicReport,
  CandidateProdictivityReport,
  CandidateTimetoHire,
  EmployeeBasicReport,
  EmployeeProductivityReport,
} from "./CandidatesAndEmployees";
import { Outlet } from "react-router-dom";

const ReportComp = () => {
  return (
    <div className="p-20">
      <div className="mt-10">
        <div className="flex justify-between">
          <span className="text-2xl font-semibold">Reports</span>
        </div>
        <div className="flex w-full mt-3 justify-between items-center">
          <div className="">
            <button className="py-2 px-3 bg-[#02a882] hover:bg-[#36aa8f] font-semibold rounded-sm  text-white mr-5">
              + Create Custom Report
            </button>
            <IconButton>
              <CreateNewFolder className="w-[30px] h-[30px]" />
            </IconButton>
          </div>
          <div className="border-2 px-2 bg-white">
            <InputBase
              placeholder="Filter by Name"
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <Search />
            </IconButton>
          </div>
        </div>
      </div>
      <div className="flex min-h-[600px]">
        <div className="w-[19%]">
          <div className="mt-10">
            {/* Candidates */}
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  Candidates
                </ListSubheader>
              }
            >
              <DropdownComp
                ItemText="Basic Reports"
                collapsed={CandidateBasicReport}
                icon={<PieChart className="" />}
              />
              <DropdownComp
                ItemText="Productivity Reports"
                collapsed={CandidateProdictivityReport}
                icon={<Category />}
              />
              <DropdownComp
                ItemText="Timing Report"
                collapsed={CandidateTimetoHire}
                icon={<Timeline />}
              />
            </List>

            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  Employees
                </ListSubheader>
              }
            >
              <DropdownComp
                ItemText="Basic Reports"
                collapsed={EmployeeBasicReport}
                icon={<PieChart className="" />}
              />
              <DropdownComp
                ItemText="Productivity Reports"
                collapsed={EmployeeProductivityReport}
                icon={<Category />}
              />
            </List>
          </div>
        </div>

        <div className="w-full bg-white mt-10 ml-5 rounded-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ReportComp;
