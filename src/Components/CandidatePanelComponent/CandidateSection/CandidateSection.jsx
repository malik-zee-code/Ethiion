import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect } from "react";
import classes from "./CandidateSection.module.css";
import data from "../Data.json";

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
const columns = [
  {
    field: "candidates",
    headerName: "Candidates",
    width: 350,
    textAlign: "center",
  },
  {
    field: "jobname",
    headerName: "Job name",
    width: 190,
  },
  {
    field: "viewed",
    headerName: "Viewed",
    type: "date",
    width: 270,
  },
  {
    field: "recieved",
    headerName: "Recieved",
    sortable: false,
    width: 360,
  },
  {
    field: "action",
    headerName: "Action",
    sortable: false,
    width: 120,
    renderCell: (cellValues) => {
      return (
        <Button
          // variant="contained"
          // color="primary"
          onClick={(event) => {
            // handleClick(event, cellValues);
          }}
        >
          <FontAwesomeIcon icon={faAngleDown} />
        </Button>
      );
    },
  },
];

const CandidateSection = ({ query }) => {
  // console.log(query);
  const Data = data.filter((d) => d.candidates.includes(query) || !query);

  
  return (
    <div className={`${classes.CandidateSec} container`}>
      {console.log(data)}
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
