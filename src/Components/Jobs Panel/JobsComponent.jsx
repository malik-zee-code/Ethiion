import {
  faBrain,
  faExternalLink,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FilterAlt } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import {
  Checkbox,
  ClickAwayListener,
  FormControlLabel,
  FormGroup,
  IconButton,
  Modal,
  NativeSelect,
  Tooltip,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { useState } from "react";
import Alert from "./AlertComp";
import CandidateStats from "./CandidateStats";
import Jobs from "./Jobs";
import rows from "./Row.json";

import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import Stages from "./Stages";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const names = [
  "By Zeeshan's Activity",
  "By Sheldon's Activity",
  "By Zain's Activity",
];

const JobsComponent = () => {
  const [toggleModal, setToggleModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [pageSize, setPageSize] = React.useState(5);
  const [filterToggle, setFilterToggle] = useState(false);
  const [personName, setPersonName] = React.useState([]);
  const [toggleStage, setToggleStage] = useState();

  const theme = useTheme();

  const columns = [
    {
      field: "id",
      headerName: "id",
      maxWidth: 50,
      description: "Row number",
      headerAlign: "left",
    },
    {
      field: "Candidate",
      headerName: "Candidate",
      minWidth: 200,
      description: "Candidate Name",
      headerAlign: "left",
    },
    {
      field: "JobTitle",
      headerName: "Job Title",
      minWidth: 200,
      description: "Job Title",
      headerAlign: "left",
    },
    {
      field: "ApplicationDate",
      headerName: "Application Date",
      minWidth: 200,
      description: "Application Date",
      headerAlign: "left",
    },
    {
      field: "Stages",
      headerName: "Stages",
      flex: 1,
      minWidth: 650,
      description: "Stages",
      headerAlign: "left",

      renderCell: (params) => {
        const value = params.value;
        console.log(value);
        return (
          <>
            <Stages value={value} />
          </>
        );
      },
    },
  ];

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div className="">
      {/* zircone industries */}
      <div>
        <div className="flex mb-6">
          {" "}
          <span className="text-2xl tracking-wide font-bold font-sans ">
            Zirconone Industries{" "}
            <ClickAwayListener onClickAway={() => setOpen(false)}>
              <Tooltip
                PopperProps={{
                  disablePortal: true,
                }}
                onClose={() => setOpen(false)}
                open={open}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                title=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
                arrow
                placement="right-start"
                sx={{ m: 1 }}
              >
                <IconButton onClick={() => setOpen(true)}>
                  {" "}
                  <FontAwesomeIcon icon={faExternalLink} className="h-4  " />
                </IconButton>
              </Tooltip>
            </ClickAwayListener>
          </span>
          <div className="ml-auto ">
            <button
              className=" py-2 px-3 rounded-md font-semibold bg-[#8635B0] text-white outline-none hover:bg-[#722b95] border-none"
              onClick={() => setToggleModal(true)}
            >
              <FontAwesomeIcon icon={faBrain} className="mr-4 h-5" />
              Ethiion Recruiter
            </button>

            <Modal
              open={toggleModal}
              onClose={() => setToggleModal(false)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              className="flex justify-center items-center"
            >
              <div className="w-[600px] h-[400px] bg-white rounded-lg">
                <div className="h-full w-full flex flex-col ">
                  <div className="border-b-2 p-3 flex w-full items-center">
                    <span className="text-xl font-semibold">
                      Ethiion Recruiter
                    </span>
                    <IconButton
                      className="ml-auto"
                      onClick={() => setToggleModal(false)}
                    >
                      <CloseIcon />
                    </IconButton>
                  </div>

                  <div className="flex flex-col h-full p-10 text-xl font-semibold">
                    <span>Select from Active Jobs</span>

                    <FormGroup className="mt-10">
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Customer Support Representative (CSR)"
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Technical Support Representative (TSR)"
                      />
                    </FormGroup>

                    <button
                      className="btn mt-auto bg-[#8635B0] text-white outline-none hover:bg-[#722b95] border-none"
                      onClick={() => setToggleModal(true)}
                    >
                      Apply Filters
                    </button>
                  </div>
                </div>
              </div>
            </Modal>
            <button className="py-2 px-3 rounded-md font-semibold ml-4 bg-[#02A882] text-white outline-none hover:bg-[#038466] border-none">
              <FontAwesomeIcon icon={faRocket} className="h-5 mr-4" />
              Create Job
            </button>
          </div>
        </div>

        <div className=" w-full h-[500px] flex">
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[5, 10, 20]}
          />
          {/* Activity Thread */}
          <div className="max-h-[400px] w-[400px] flex flex-col rounded-md bg-[#fff] ml-5 ">
            <div className="w-full h-[50px] bg-slate-300  rounded-t-md">
              <div className="flex items-center p-2">
                <span className="font-semibold">Activity Thread</span>
                <IconButton
                  className="ml-auto"
                  onClick={() => setFilterToggle(!filterToggle)}
                >
                  <FilterAlt />
                </IconButton>
              </div>
            </div>
            {filterToggle && (
              <div className="w-full my-1 bg-slate-300 flex justify-center ">
                <FormControl className="w-full bg-white">
                  <InputLabel id="demo-multiple-chip-label">Filter</InputLabel>
                  <Select
                    className=" bg-white"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={
                      <OutlinedInput
                        id="select-multiple-chip"
                        label="Chip"
                        className="bg-white"
                      />
                    }
                    renderValue={(selected) => (
                      <Box
                        sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}
                        className="bg-white"
                      >
                        {selected.map((value) => (
                          <Chip key={value} label={value} />
                        ))}
                      </Box>
                    )}
                    MenuProps={MenuProps}
                  >
                    {names.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, personName, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            )}
            <div className="flex flex-col h-full overflow-x-auto p-2">
              <Alert
                title="Launch Date"
                btnTitle="Go To inbox"
                titleClassName="text-md"
                btnClassName="text-xs"
              />
              <Alert
                title="Marked the Interview"
                btnTitle="Change Status"
                titleClassName="text-md"
                btnClassName="text-xs"
              />
              <Alert
                title="Launch Date"
                btnTitle="Go To inbox"
                titleClassName="text-md"
                btnClassName="text-xs"
              />
              <Alert
                title="Marked the Interview"
                btnTitle="Change Status"
                titleClassName="text-md"
                btnClassName="text-xs"
              />
              <Alert
                title="Marked the Interview"
                btnTitle="Change Status"
                titleClassName="text-md"
                btnClassName="text-xs"
              />
              <Alert
                title="Marked the Interview"
                btnTitle="Change Status"
                titleClassName="text-md"
                btnClassName="text-xs"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 grid  gap-6">
        {/* JOBS */}
        <div className="flex items-center">
          <span className="text-2xl font-bold ">Jobs</span>
          <FormControl className="ml-auto w-[100px]">
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              All Jobs
            </InputLabel>
            <NativeSelect
              defaultValue={"DEFAULT"}
              inputProps={{
                name: "age",
                id: "uncontrolled-native",
              }}
            >
              <option value={"DEFAULT"}>Select</option>

              <option value={"CSR"}>CSR</option>
              <option value={"TSR"}>TSR</option>
            </NativeSelect>
          </FormControl>
          <FormControl className="ml-10">
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              All Location
            </InputLabel>
            <NativeSelect
              defaultValue={"DEFAULT"}
              inputProps={{
                name: "age",
                id: "uncontrolled-native",
              }}
            >
              <option value={"DEFAULT"}>Select</option>

              <option value={"Florida"}>Florida</option>
              <option value={"Sans Francisco"}>Sans Francisco</option>
            </NativeSelect>
          </FormControl>
          <FormControl className="ml-10 w-[250px]">
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Group By
            </InputLabel>
            <NativeSelect
              defaultValue={"DEFAULT"}
              inputProps={{
                name: "age",
                id: "uncontrolled-native",
              }}
            >
              <option value={"DEFAULT"}>Select</option>

              <option value={"Florida"}>Most Applied</option>
              <option value={"Sans Francisco"}>
                Most Number of Candidates
              </option>
            </NativeSelect>
          </FormControl>
        </div>
        <div className="flex  ">
          {/* TSR */}
          <Jobs job="TSR" location="kingsten, JM" />
          {/* CSR */}
          <Jobs job="CSR" location="kingsten, JM" />
        </div>
      </div>

      <CandidateStats />
    </div>
  );
};

export default JobsComponent;
