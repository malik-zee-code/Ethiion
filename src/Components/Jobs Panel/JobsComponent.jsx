import { faBrain, faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const JobsComponent = () => {
  return (
    <div className="">
      {/* zircone industries */}
      <div>
        <div className="flex mb-6">
          {" "}
          <span className="text-3xl tracking-wide font-bold font-sans ">
            Zircone Industries{" "}
          </span>
          <div className="ml-auto ">
            <button className="btn bg-[#8635B0] text-white outline-none hover:bg-[#722b95] border-none">
              <FontAwesomeIcon icon={faBrain} className="mr-4 h-5" />
              Ethiion Recruiter
            </button>
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
                  <a href="/#" className="text-indigo-600 underline">
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
    </div>
  );
};

export default JobsComponent;
