import React from "react";
import { Route, Routes } from "react-router-dom";
import Categories from "../../../Components/Admin Panel Components/Categories/Categories";
import Documents from "../../../Components/Admin Panel Components/Documents/Documents";
import Emails from "../../../Components/Admin Panel Components/Emails/Emails";
import Evaluations from "../../../Components/Admin Panel Components/Evaluations/Evaluations";
import HiringWorkflow from "../../../Components/Admin Panel Components/HiringWorkflow/HiringWorkflow";
import Interviews from "../../../Components/Admin Panel Components/Interviews/Interviews";
import Questionaries from "../../../Components/Admin Panel Components/Questionaries/Questionaries";
import Sidebar from "../../../Components/Admin Panel Components/Template-sidebar/Sidebar";
import classes from "./Template.module.css";

const Template = () => {
  const hamburgerHandler = () => {};
  return (
    <React.Fragment>
      <div className={`${classes.template} `} onClick={hamburgerHandler}>
        <Sidebar className="row" />
        <Routes>
          <Route path="hiring-workflow" element={<HiringWorkflow />} />
          <Route path="questionaries" element={<Questionaries />} />
          <Route path="interview" element={<Interviews />} />
          <Route path="evaluation" element={<Evaluations />} />
          <Route path="email" element={<Emails />} />
          <Route path="category" element={<Categories />} />
          <Route path="documents" element={<Documents />} />
        </Routes>
      </div>
    </React.Fragment>
  );
};

export default Template;
