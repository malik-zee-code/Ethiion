import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { DomainVerification } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import rows from "../Jobs Panel/inspectionRows.json";

const columns = [
  {
    field: "id",
    headerName: "id",
    maxWidth: 50,
    description: "Row number",
    headerAlign: "left",
  },
  {
    field: "Name",
    headerName: "Name",
    minWidth: 200,
    flex: 1,
    description: "Candidate Name",
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
    field: "Email",
    headerName: "Email",
    minWidth: 200,
    flex: 1,
    description: "Email",
    headerAlign: "left",
  },
  {
    field: "Phone",
    headerName: "Phone",
    minWidth: 200,
    flex: 1,
    description: "Phone",
    headerAlign: "left",
  },

  {
    field: "stage",
    headerName: "Stage",
    flex: 1,
    minWidth: 200,
    description: "Stage",
    headerAlign: "left",
    renderCell: (params) => {
      const value = params.value;
      console.log(params);
      return (
        <button
          className={`btn w-[100px] no-animation bg-indigo-500 text-white hover:bg-indigo-600 
           border-none  font-normal rounded-full tracking-wider mr-5  capitalize`}
        >
          {value}
        </button>
      );
    },
  },
];

const CandidateInspection = () => {
  const [value, setValue] = useState([null, null]);
  const [pageSize, setPageSize] = React.useState(5);

  console.log(value);
  return (
    <div className="w-full h-full">
      <h1 className="text-xl font-semibold mt-7 px-4">
        Candidate Inspections{" "}
        <Tooltip
          title="
          Filter and view the details of every candidate in the system.
        "
          arrow
          placement="right-start"
        >
          <DomainVerification className="ml-3" />
        </Tooltip>
      </h1>
      <div className=" flex justify-between items-center py-6 px-16">
        <div className=" flex  ">
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              All Jobs
            </InputLabel>
            <NativeSelect
              defaultValue={""}
              inputProps={{
                name: "age",
                id: "uncontrolled-native",
              }}
            >
              <option value={"CSR"}>CSR</option>
              <option value={"TSR"}>TSR</option>
            </NativeSelect>
          </FormControl>
          <FormControl fullWidth className="ml-10">
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              All Location
            </InputLabel>
            <NativeSelect
              defaultValue={30}
              inputProps={{
                name: "age",
                id: "uncontrolled-native",
              }}
            >
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
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

export default CandidateInspection;
