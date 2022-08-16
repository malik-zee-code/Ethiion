import { AccessAlarmSharp } from "@mui/icons-material";
import { FormControl, InputLabel, NativeSelect, Tooltip } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DateRangePicker } from "@mui/x-date-pickers-pro";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import React, { useState } from "react";

import rows from "./TimetoHireData.json";

const TimetoHire = () => {
  const columns = [
    {
      field: "id",
      headerName: "id",
      maxWidth: 50,
      description: "Row number",
      headerAlign: "left",
    },
    {
      field: "Job",
      headerName: "Job",
      minWidth: 200,
      flex: 1,
      description: "Job",
      headerAlign: "left",
    },
    {
      field: "Department",
      headerName: "Department",
      minWidth: 200,
      flex: 1,
      description: "Department",
      headerAlign: "left",
    },
    {
      field: "Hired",
      headerName: "Hired",
      minWidth: 200,
      flex: 1,
      description: "Hired",
      headerAlign: "left",
    },
    {
      field: "OpenDate",
      headerName: "Open Date",
      minWidth: 200,
      flex: 1,
      description: "Open Date",
      headerAlign: "left",
    },
    {
      field: "TimetoFill",
      headerName: "Time to Fill",
      flex: 1,
      minWidth: 200,
      description: "Time to Fill",
      headerAlign: "left",
    },
    {
      field: "TimetoHire",
      headerName: "Time to Hire",
      flex: 1,
      minWidth: 200,
      description: "Time to Hire",
      headerAlign: "left",
    },
  ];
  const [value, setValue] = useState([null, null]);
  const [pageSize, setPageSize] = React.useState(5);

  return (
    <div className="w-full h-full">
      <div className="ml-7 mt-4 mb-5 p-2 flex items-center">
        <span className="text-xl font-semibold "> Time to Hire</span>{" "}
        <Tooltip
          title="
          Track how long it takes from when a candidate applies to when they are marked as hired in the system.
      "
          arrow
          placement="right-start"
        >
          <AccessAlarmSharp className="ml-5" />
        </Tooltip>{" "}
        <div className="ml-auto">
          <button className="px-3 py-2 rounded-md mr-3 font-semibold border-2 shadow-md hover:bg-slate-100 ease-in-out duration-100 ">
            Export to CSV
          </button>
          <button className="px-3 py-2 rounded-md mr-3 font-semibold border-2 shadow-md hover:bg-slate-100 ease-in-out duration-100">
            Export to PDF
          </button>
        </div>
      </div>

      <div className=" flex justify-between items-center py-6 px-16">
        <div className=" flex  ">
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              All Jobs
            </InputLabel>
            <NativeSelect
              defaultValue={1}
              inputProps={{
                name: "age",
                id: "uncontrolled-native",
              }}
            >
              <option value={1}>TSR</option>
              <option value={2}>CSR</option>
            </NativeSelect>
          </FormControl>
          <FormControl fullWidth className="ml-10">
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              All Location
            </InputLabel>
            <NativeSelect
              defaultValue={3}
              inputProps={{
                name: "age",
                id: "uncontrolled-native",
              }}
            >
              <option value={1}>Sans Francisco</option>
              <option value={2}>Queens</option>
              <option value={3}>Florida</option>
            </NativeSelect>
          </FormControl>
        </div>

        {/* date input */}
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateRangePicker
            label="Advanced keyboard"
            className=""
            value={value}
            onChange={(newValue) => setValue(newValue)}
            renderInput={(startProps, endProps) => (
              <React.Fragment>
                <span className="mr-5">All Time</span>
                <input
                  ref={startProps.inputRef}
                  {...startProps.inputProps}
                  className="w-[100px]"
                />
                <input
                  ref={endProps.inputRef}
                  {...endProps.inputProps}
                  className="w-[100px]"
                />
              </React.Fragment>
            )}
          />
        </LocalizationProvider>
      </div>

      <div className="h-[500px] p-7">
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[5, 10, 20]}
        />
      </div>
    </div>
  );
};

export default TimetoHire;
