import {
  faBrain,
  faExternalLink,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
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

const JobsComponent = () => {
  const [toggleModal, setToggleModal] = useState(false);
  const [open, setOpen] = useState(false);

  const stage = ["Interview", "Offer", "Applied,Assesment, H. Screen"];

  const rows = [
    {
      id: 1,
      Candidate: "Zeeshan",
      JobTitle: "TSR",
      ApplicationDate: "12/23/22",
      Stages: "Interview",
    },
    {
      id: 2,
      Candidate: "Zain",
      JobTitle: "CSR",
      ApplicationDate: "12/23/22",
      Stages: "Offer",
    },
    {
      id: 3,
      Candidate: "Sheldon",
      JobTitle: "TSR",
      ApplicationDate: "12/23/22",
      Stages: "Applied",
    },
    {
      id: 4,
      Candidate: "Ahmad",
      JobTitle: "TSR",
      ApplicationDate: "12/23/22",
      Stages: "Interview",
    },
    {
      id: 5,
      Candidate: "Ahmad",
      JobTitle: "CSR",
      ApplicationDate: "12/23/22",
      Stages: "H. Screen",
    },
    {
      id: 6,
      Candidate: "Ali",
      JobTitle: "CSR",
      ApplicationDate: "12/23/22",
      Stages: "Assesment",
    },
  ];

  const columns = [
    {
      field: "id",
      headerName: "id",
      flex: 1,
      maxWidth: 50,
      description: "Row number",
      headerAlign: "left",
    },
    {
      field: "Candidate",
      headerName: "Candidate",
      flex: 1,
      maxWidth: 300,
      description: "Candidate Name",
      headerAlign: "left",
    },
    {
      field: "JobTitle",
      headerName: "Job Title",
      flex: 1,
      maxWidth: 300,
      description: "Job Title",
      headerAlign: "left",
    },
    {
      field: "ApplicationDate",
      headerName: "Application Date",
      flex: 1,
      maxWidth: 300,
      description: "Application Date",
      headerAlign: "left",
    },
    {
      field: "Stages",
      headerName: "Stages",
      flex: 1,
      minWidth: 50,
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
              }   border-none  font-normal capitalize rounded-[4px] tracking-wider mr-5 text-black`}
            >
              Applied
            </button>
            <button
              className={`btn no-animation ${
                value === "H. Screen"
                  ? "bg-indigo-500 text-white hover:bg-indigo-600"
                  : "bg-slate-200 hover:bg-slate-200"
              } border-none  font-normal capitalize rounded-[4px] tracking-wider mr-5 text-black`}
            >
              h. Screen
            </button>
            <button
              className={`btn no-animation ${
                value === "Assesment"
                  ? "bg-indigo-500 text-white hover:bg-indigo-600"
                  : "bg-slate-200 hover:bg-slate-200"
              }  border-none font-normal capitalize rounded-[4px] tracking-wider mr-5 text-black`}
            >
              Assesment
            </button>
            <button
              className={`btn no-animation ${
                value === "Interview"
                  ? "bg-indigo-500 text-white hover:bg-indigo-600"
                  : "bg-slate-200 hover:bg-slate-200"
              } border-none font-normal capitalize rounded-[4px] tracking-wider mr-5 text-black`}
            >
              Interview
            </button>
            <button
              className={`btn no-animation ${
                value === "Offer"
                  ? "bg-indigo-500 text-white hover:bg-indigo-600"
                  : "bg-slate-200 hover:bg-slate-200"
              }  border-none font-normal capitalize rounded-[4px] tracking-wider mr-5 text-black`}
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
          <span className="text-3xl tracking-wide font-bold font-sans ">
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
                  <FontAwesomeIcon icon={faExternalLink} className="h-5  " />
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

        <div className=" w-full h-[500px] ">
          <DataGrid rows={rows} columns={columns} />
          <div></div>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-6">
        {/* JOBS */}
        <div className="flex flex-col">
          <div className="flex">
            <span className="text-3xl font-bold ">Jobs</span>
          </div>

          {/* TSR */}

          <Jobs job="TSR" location="kingsten, JM" />

          {/* CSR */}
          <Jobs job="CSR" location="kingsten, JM" />
        </div>
        {/* Activity Thread */}
        <div className="flex flex-col">
          <div className="flex items-center">
            <span className="text-3xl font-bold">Activity Thread</span>
            <span className="text-xl text-slate-500 ml-auto underline">
              Alert
            </span>
          </div>

          <div className="bg-white h-full rounded-md  mt-4 flex ">
            {/* side bar */}
            <div className="w-[200px] p-4 bg-[#F3F3F3] h-full flex flex-col flex-none">
              <button className="font-bold mb-3">Filters</button>
              <div className="flex flex-col">
                <span className="uppercase font-bold ">Automated Actions</span>
                <button className=" mt-3 rounded-full bg-[#e9e9e9] py-2 font-bold text-[#c4c3c3]">
                  Past
                </button>
                <button className=" mt-3 rounded-full bg-[#e9e9e9] py-2 font-bold text-[#c4c3c3]">
                  Failed
                </button>
              </div>
              <div className="flex flex-col">
                <span className="uppercase font-bold ">Jobs</span>
                <button className=" mt-3 rounded-full bg-[#e9e9e9] py-2 font-bold text-[#c4c3c3]">
                  Internal
                </button>
                <button className=" mt-3 rounded-full bg-[#e9e9e9] py-2 font-bold text-[#c4c3c3]">
                  Bulk
                </button>
                <button className=" mt-3 rounded-full bg-[#e9e9e9] py-2 font-bold text-[#c4c3c3]">
                  Bulk
                </button>
              </div>
              <div className="flex flex-col">
                <span className="uppercase font-bold ">Jobs</span>
                <button className=" mt-3 rounded-full bg-[#e9e9e9] py-2 font-bold text-[#c4c3c3]">
                  Internal
                </button>
                <button className=" mt-3 rounded-full bg-[#e9e9e9] py-2 font-bold text-[#c4c3c3]">
                  Bulk
                </button>
              </div>
            </div>
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
