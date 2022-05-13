import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
// import AdminSetting from "../../Components/AdministrativeSettings/AdminSetting";
import AdminSetting from "../../Components/Admin Panel Components/AdministrativeSettings/AdminSetting";
import Template from "./Template/Template";

let isInitial = true;

const Admin = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (isInitial) {
      navigate("template/hiring-workflow");
      isInitial = false;
    }
  }, [navigate]);

  return (
    <div>
      <AdminSetting />
      <Routes>
        <Route path="template/*" element={<Template />} />
      </Routes>
    </div>
  );
};

export default Admin;
