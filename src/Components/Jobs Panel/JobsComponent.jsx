import {
  faBrain,
  faExternalLink,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CloseIcon from "@mui/icons-material/Close";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  Modal,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import Alert from "./AlertComp";
import CandidateStats from "./CandidateStats";

const JobsComponent = () => {
  const [toggleModal, setToggleModal] = useState(false);

  return (
    <div className="">
      {/* zircone industries */}
      <div>
        <div className="flex mb-6">
          {" "}
          <span className="text-3xl tracking-wide font-bold font-sans ">
            Zircone Industries{" "}
            <FontAwesomeIcon icon={faExternalLink} className="h-5  ml-3" />
          </span>
          <div className="ml-auto ">
            <button
              className="btn bg-[#8635B0] text-white outline-none hover:bg-[#722b95] border-none"
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
              <div className="w-[900px] h-[500px] bg-white rounded-lg">
                <div className="border-b-2 p-8 flex w-full items-center">
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

                <div className="flex flex-col p-10 text-xl font-semibold">
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
                    className="btn mt-[100px] bg-[#8635B0] text-white outline-none hover:bg-[#722b95] border-none"
                    onClick={() => setToggleModal(true)}
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            </Modal>
            <button className="btn ml-4 bg-[#02A882] text-white outline-none hover:bg-[#038466] border-none">
              <FontAwesomeIcon icon={faRocket} className="h-5 mr-4" />
              Create Job
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className=" w-full bg-white rounded-2xl border-separate border-spacing-7">
            {/* <!-- head --> */}
            <thead className="text-slate-400 ">
              <tr className="">
                <th>Candidate</th>
                <th>Job Title</th>
                <th>Application Date</th>
                <th className="flex">Stages </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {" "}
                  <a href="/#" className="text-indigo-600 underline italic">
                    Cy Ganderton
                  </a>{" "}
                </td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
                <td>
                  <button className="btn no-animation bg-slate-200 border-none hover:bg-slate-200 font-normal capitalize rounded-[4px] tracking-wider mr-5 text-black">
                    Applied
                  </button>
                  <button className="btn no-animation bg-slate-200 border-none hover:bg-slate-200 font-normal capitalize rounded-[4px] tracking-wider mr-5 text-black">
                    h. Screen
                  </button>
                  <button className="btn no-animation bg-slate-200 border-none hover:bg-slate-200 font-normal capitalize rounded-[4px] tracking-wider mr-5 text-black">
                    Assesment
                  </button>
                  <button className="btn no-animation bg-slate-200 border-none hover:bg-slate-200 font-normal capitalize rounded-[4px] tracking-wider mr-5 text-black">
                    Interview
                  </button>
                  <button className="btn no-animation bg-slate-200 border-none hover:bg-slate-200 font-normal capitalize rounded-[4px] tracking-wider mr-5 text-black">
                    offer
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-6">
        {/* JOBS */}
        <div className="flex flex-col">
          <div className="flex">
            <span className="text-3xl font-bold ">Jobs</span>
          </div>

          {/* TSR */}

          <div className="w-[100%] min-h-[200px] mt-4  bg-white rounded-md p-7 ">
            <div className="flex border-b-2 items-center pb-3">
              <span className="italic text-xl font-bold underline mr-8">
                TSR
              </span>
              <span className="text-slate-500">Kingsten, JM</span>
              <div className="ml-auto">
                <button className="btn bg-[#8635B0] text-white outline-none hover:bg-[#722b95] border-none">
                  Local Candidate
                </button>
                <button className="btn ml-4 bg-[#02A882] text-white outline-none hover:bg-[#038466] border-none">
                  publish
                </button>
              </div>
            </div>

            <div className="">
              <div class="stats bg-[#f8f8f8]  m-4 min-w-[180px]">
                <div class="stat px-10">
                  <div class="stat-value text-black text-center font-medium">
                    10
                  </div>
                  <div class="stat-title text-center text-xl text-slate-500 tracking-wide">
                    Applied
                  </div>
                </div>
              </div>
              <div class="stats bg-[#f8f8f8] mr-3 m-4  min-w-[180px]">
                <div class="stat px-10">
                  <div class="stat-value text-black text-center font-medium">
                    10
                  </div>
                  <div class="stat-title text-center text-xl text-slate-500 tracking-wide">
                    Phone Screening
                  </div>
                </div>
              </div>
              <div class="stats bg-[#f8f8f8] mr-3 m-4  min-w-[180px]">
                <div class="stat px-10">
                  <div class="stat-value text-black text-center font-medium">
                    10
                  </div>
                  <div class="stat-title text-center text-xl text-slate-500 tracking-wide">
                    Assessment
                  </div>
                </div>
              </div>{" "}
              <div class="stats bg-[#f8f8f8] mr-3 m-4  min-w-[180px]">
                <div class="stat px-10">
                  <div class="stat-value text-black text-center font-medium">
                    10
                  </div>
                  <div class="stat-title text-center text-xl text-slate-500 tracking-wide">
                    Interview
                  </div>
                </div>
              </div>{" "}
              <div class="stats bg-[#f8f8f8] mr-3 m-4  min-w-[180px]">
                <div class="stat px-10">
                  <div class="stat-value text-black text-center font-medium">
                    10
                  </div>
                  <div class="stat-title text-center text-xl text-slate-500 tracking-wide">
                    Offer
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CSR */}
          <div className="w-[100%] min-h-[200px] mt-4  bg-white rounded-md p-7 ">
            <div className="flex border-b-2 items-center pb-3">
              <span className="italic text-xl font-bold underline mr-8">
                CSR
              </span>
              <span className="text-slate-500">Kingsten, JM</span>
              <div className="ml-auto">
                <button className="btn bg-[#8635B0] text-white outline-none hover:bg-[#722b95] border-none">
                  Local Candidate
                </button>
                <button className="btn ml-4 bg-[#02A882] text-white outline-none hover:bg-[#038466] border-none">
                  publish
                </button>
              </div>
            </div>

            <div className="">
              <div class="stats bg-[#f8f8f8]  m-4 min-w-[180px]">
                <div class="stat px-10">
                  <div class="stat-value text-black text-center font-medium">
                    10
                  </div>
                  <div class="stat-title text-center text-xl text-slate-500 tracking-wide">
                    Applied
                  </div>
                </div>
              </div>
              <div class="stats bg-[#f8f8f8] mr-3 m-4  min-w-[180px]">
                <div class="stat px-10">
                  <div class="stat-value text-black text-center font-medium">
                    10
                  </div>
                  <div class="stat-title text-center text-xl text-slate-500 tracking-wide">
                    Phone Screening
                  </div>
                </div>
              </div>
              <div class="stats bg-[#f8f8f8] mr-3 m-4  min-w-[180px]">
                <div class="stat px-10">
                  <div class="stat-value text-black text-center font-medium">
                    10
                  </div>
                  <div class="stat-title text-center text-xl text-slate-500 tracking-wide">
                    Assessment
                  </div>
                </div>
              </div>{" "}
              <div class="stats bg-[#f8f8f8] mr-3 m-4  min-w-[180px]">
                <div class="stat px-10">
                  <div class="stat-value text-black text-center font-medium">
                    10
                  </div>
                  <div class="stat-title text-center text-xl text-slate-500 tracking-wide">
                    Interview
                  </div>
                </div>
              </div>{" "}
              <div class="stats bg-[#f8f8f8] mr-3 m-4  min-w-[180px]">
                <div class="stat px-10">
                  <div class="stat-value text-black text-center font-medium">
                    10
                  </div>
                  <div class="stat-title text-center text-xl text-slate-500 tracking-wide">
                    Offer
                  </div>
                </div>
              </div>
            </div>
          </div>
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
