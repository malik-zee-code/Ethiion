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
  Tooltip,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { useState } from "react";
import Alert from "./AlertComp";
import CandidateStats from "./CandidateStats";
import Jobs from "./Jobs";
import rows from "./Row.json";

const JobsComponent = () => {
  const [toggleModal, setToggleModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [pageSize, setPageSize] = React.useState(5);

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
            <button
              className={`btn no-animation ${
                value === "Applied"
                  ? "bg-indigo-500 text-white hover:bg-indigo-600"
                  : "bg-slate-200 hover:bg-slate-200"
              }   border-none  font-normal capitalize rounded-full tracking-wider mr-5 text-black `}
            >
              Applied
            </button>
            <button
              className={`btn no-animation ${
                value === "H. Screen"
                  ? "bg-indigo-500 text-white hover:bg-indigo-600"
                  : "bg-slate-200 hover:bg-slate-200"
              } border-none  font-normal capitalize rounded-full tracking-wider mr-5 text-black`}
            >
              h. Screen
            </button>
            <button
              className={`btn no-animation ${
                value === "Assesment"
                  ? "bg-indigo-500 text-white hover:bg-indigo-600"
                  : "bg-slate-200 hover:bg-slate-200"
              }  border-none font-normal capitalize rounded-full tracking-wider mr-5 text-black`}
            >
              Assesment
            </button>
            <button
              className={`btn no-animation ${
                value === "Interview"
                  ? "bg-indigo-500 text-white hover:bg-indigo-600"
                  : "bg-slate-200 hover:bg-slate-200"
              } border-none font-normal capitalize rounded-full tracking-wider mr-5 text-black`}
            >
              Interview
            </button>
            <button
              className={`btn no-animation ${
                value === "Offer"
                  ? "bg-indigo-500 text-white hover:bg-indigo-600"
                  : "bg-slate-200 hover:bg-slate-200"
              }  border-none font-normal capitalize rounded-full tracking-wider mr-5 text-black`}
            >
              offer
            </button>
          </>
        );
      },
    },
  ];

  return (
    <div className="">
      {/* zircone industries */}
      <div>
        <div className="flex mb-6">
          {" "}
          <span className="text-2xl tracking-wide font-bold font-sans ">
            Zircone Industries{" "}
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
              className=" py-2 px-3 rounded-sm font-semibold bg-[#8635B0] text-white outline-none hover:bg-[#722b95] border-none"
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
            <button className="py-2 px-3 rounded-sm font-semibold ml-4 bg-[#02A882] text-white outline-none hover:bg-[#038466] border-none">
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
          <div className="h-[200px] w-[400px] flex rounded-md bg-[#fff] ml-5">
            <div className="w-full h-[50px] bg-slate-300 p-2 flex items-center">
              <span className="font-semibold">Activity Thread</span>
              <IconButton className="ml-auto">
                <FilterAlt />
              </IconButton>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-6">
        {/* JOBS */}
        <div className="flex flex-col">
          <div className="flex">
            <span className="text-2xl font-bold ">Jobs</span>
          </div>
          {/* TSR */}
          <Jobs job="TSR" location="kingsten, JM" />
          {/* CSR */}
          <Jobs job="CSR" location="kingsten, JM" />
        </div>
        {/* Activity Thread */}
        <div className="flex flex-col">
          <div className="flex items-center">
            <span className="text-2xl font-bold">Activity Thread</span>
            <span className="text-xl text-slate-500 ml-auto underline">
              Alert
            </span>
          </div>

          <div className="bg-white h-full rounded-md  mt-4 flex ">
            {/* Alerts */}
            <div className="flex-1">
              <Alert title="Launch Date" btnTitle="Go To inbox" />
              <Alert title="Marked the Interview" btnTitle="Change Status" />
              <Alert title="Launch Date" btnTitle="Go To inbox" />
              <Alert title="Marked the Interview" btnTitle="Change Status" />
            </div>
          </div>
        </div>
      </div>

      <CandidateStats />
    </div>
  );
};

export default JobsComponent;
