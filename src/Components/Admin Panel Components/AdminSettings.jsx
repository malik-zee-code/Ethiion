import { faExternalLink, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import CardsAutomation from "./CardsAutomation";

const AdminSettings = () => {
  return (
    <div className="p-20 flex w-full min-h-[900px] bg-[#f8f8f8]">
      {/* Side Bar */}
      <div className="flex flex-col w-[400px]  bg-[#ffffff] rounded-2xl p-4">
        <span className="text-2xl font-bold">Settings </span>

        <div className="mt-20">
          <ul className="text-xl font-semibold text-slate-400">
            <li>
              <Link to="privacy"> Privacy</Link>
            </li>
            <li>
              <Link to="compliance">Compliance</Link>
            </li>
            <li>
              <Link to="company"> Company</Link>
            </li>
          </ul>
        </div>

        <div className="text-lg flex flex-col mt-auto  font-semibold">
          <span>Prefrences</span>
          <Link to="profile" className="underline ">
            Profile
            <FontAwesomeIcon icon={faExternalLink} className="h-5  ml-3" />
          </Link>
        </div>
      </div>
      <div className="flex-1 h-full flex flex-col">
        <div className="flex p-10 w-full">
          <ul className="flex justify-between text-xl mr-10 w-full font-medium text-slate-500">
            <li>Integrations</li>
            <li>Career Page</li>
            <li>Template</li>
            <li>Workflow</li>
            <li>Automation</li>
          </ul>
        </div>

        <div className=" w-full  bg-[#ffffff] min-h-full flex flex-col rounded-md ml-5">
          <div className=" border-b-2">
            <ul className="flex p-7 text-md text-slate-400 ">
              <li className="mr-10">
                <Link to="automations">Automation Templates</Link>
              </li>
              <li>
                <Link to="account-automations">Account Automation</Link>
              </li>
            </ul>
          </div>

          <div className=" p-20 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2">
            <CardsAutomation title="Ethiion Assessment" />
            <CardsAutomation title="Ethiion Assessment" />
            <CardsAutomation title="Ethiion Assessment" />
            <CardsAutomation title="Ethiion Assessment" />
          </div>
          <div className="mt-auto p-10">
            <button className="btn ml-4 px-10 bg-[#02A882] text-white outline-none hover:bg-[#038466] border-none mr-7">
              <FontAwesomeIcon icon={faPlus} className="mr-4 h-5" />
              New Folder
            </button>
            <button className="btn bg-[#8635B0] px-9 text-white outline-none hover:bg-[#722b95] border-none">
              New Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
