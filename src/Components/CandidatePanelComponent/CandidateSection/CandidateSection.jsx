import { faAngleDown, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";
import classes from "./CandidateSection.module.css";
import data from "../Data.json";
import { useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import ButtonDown from "../btnComponent/btn.component";

const customazingDataGrid = {
  "& .MuiDataGrid-columnHeaders": {
    textTransform: "uppercase",
    fontFamily: '"Varela Round", sans-serif',
    backgroundColor: "#536475",
    color: "#fff",

    "& .MuiDataGrid-columnHeaderTitleContainer": {
      display: "flex",
      "&:nth-child(5)": {
        textAlign: "center",
      },
    },

    "& .MuiDataGrid-columnSeparator": {
      display: "none",
    },

    "& .MuiDataGrid-columnHeaderTitle": {
      fontWeight: "600",
      fontSize: "14px",
    },
  },

  "& .MuiDataGrid-virtualScrollerRenderZone": {
    backgroundColor: "#fff",
    "& .MuiDataGrid-row": {
      // "&:nth-child(2n)": { backgroundColor: "rgba(235, 235, 235, .7)" },
      "& .MuiDataGrid-cell": {
        "&:nth-child(1)": {
          fontSize: "16px",
          textTransform: "capitalize",
          fontWeight: "600",
        },
        "&:nth-child(2)": {
          fontSize: "15px",
          textTransform: "capitalize",
          fontWeight: "600",
        },
        "&:nth-child(5)": {
          display: "flex",
          justifyContent: "center",
        },
      },
    },
  },
};

const CandidateSection = ({ query }) => {
  const [toggle, setToggle] = useState(false);
  const row = useSelector((state) => state.candidate.candidateData);
  const [propData, setpropData] = useState(false);
  const naviagate = useNavigate();

  const handleData = (data) => {
    setpropData(data);
  };

  const buttons = [
    <Button key="one" onClick={() => naviagate("/applications")}>
      {" "}
      Invite
    </Button>,
  ];
  const columns = [
    {
      field: "candidates",
      headerName: "Candidates",
      width: 350,
      editable: true,
      textAlign: "center",
      render: () => {
        // <Link className={classes.link} to="/">
        <FontAwesomeIcon icon={faEye} />;
        // </Link>;
      },
    },
    {
      field: "jobname",
      headerName: "Job name",
      width: 190,
      editable: true,
    },
    {
      field: "viewed",
      headerName: "Viewed",
      type: "text",
      width: 270,
      editable: true,
    },
    {
      field: "recieved",
      headerName: "Recieved",
      sortable: false,
      width: 490,
      editable: true,
      type: "date",
      renderCell: (cellValues) => {
        // const [state, setState] = useState();
        return (
          <>
            {cellValues.value}

            {<ButtonDown handleData={handleData} />}
            {propData && buttons}
          </>
        );
      },
    },
  ];
  // console.log(query);
  const Data = row.filter((r) => r.candidates.includes(query) || !query);

  return (
    <div className={`${classes.CandidateSec} container`}>
      <DataGrid
        rows={Data}
        columns={columns}
        pageSize={20}
        disableSelectionOnClick
        sx={customazingDataGrid}
      />
    </div>
  );
};

export default CandidateSection;
