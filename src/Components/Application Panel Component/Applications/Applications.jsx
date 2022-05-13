import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import ApplicationsHeader from "../ApplicationsHeader/ApplicationsHeader";
import classes from "./Applications.module.css";
import Status from "../Status/Status";

const customazingDataGrid = {
  "& .MuiDataGrid-columnHeaders": {
    textTransform: "uppercase",
    fontFamily: '"Varela Round", sans-serif',
    "& .MuiDataGrid-columnHeaderTitleContainer": {
      display: "flex",
      justifyContent: "center",
    },
    "& .MuiDataGrid-columnHeaderTitle": {
      fontWeight: "600",
      fontSize: "14px",
      opacity: "0.8",
      textAlign: "center !important",
    },
    // },
  },

  // "& .MuiDataGrid-virtualScrollerRenderZone": {
  //   "& .MuiDataGrid-row": {
  //     // "&:nth-child(2n)": { backgroundColor: "rgba(235, 235, 235, .7)" },
  //     "& .MuiDataGrid-cell": {
  //       "&:nth-child(1)": {
  //         fontSize: "15px",
  //         textTransform: "capitalize",
  //         opacity: "0.7",
  //       },
  //     },
  //   },
  // },
};
const columns = [
  {
    field: "canidate",
    headerName: "Canidate",
    width: 150,
    textAlign: "center",
  },
  {
    field: "jobname",
    headerName: "Job name",
    width: 150,
  },
  {
    field: "applicationDate",
    headerName: "Application Date",
    type: "date",
    width: 170,
  },
  {
    field: "status",
    headerName: "Status",
    sortable: false,
    width: 660,
    renderCell: (color) => {
      return <Status className={color} />;
    },
  },
  {
    field: "action",
    headerName: "Action",
    sortable: false,
    width: 190,
  },
];
const rows = [
  {
    id: 1,
    canidate: "Snow",
    jobname: "Jon",
    applicationDate: "12/3/5",
    status: 0,
  },
  {
    id: 2,
    canidate: "Lannister",
    jobname: "Cersei",
    applicationDate: "12/3/5",
    status : 1
  },
  { id: 3, 
    canidate: "Lannister",
    jobname: "Jaime", 
    applicationDate: "12/3/5",
    status : 5
  },
  { id: 4, 
    canidate: "Stark", 
    jobname: "Arya", 
    applicationDate: "12/3/5",
    status : 4
   },
  {
    id: 5,
    canidate: "Targaryen",
    jobname: "Daenerys",
    applicationDate: "12/3/5",
    status : 3
    
  },
  { id: 6, canidate: "Melisandre", 
  jobname: null, 
  applicationDate: "12/3/5",
  status : 5
  },
  {
    id: 7,
    canidate: "Clifford",
    jobname: "Ferrara",
    applicationDate: "12/3/5",
    status : 1
  },
  { id: 8, 
    canidate: "Frances",
    jobname: "Rossini",
    applicationDate: "12/3/5",
    status : 2
  },
  { id: 9, 
    canidate: "Roxie", 
    jobname: "Harvey", 
    applicationDate: "12/3/5",
    status : 4
   },
];

const Applications = () => {
  return (
    <>
      <ApplicationsHeader />
      <div className={classes.container}>
        <div className="container">
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={20}
            // rowsPerPageOptions={[20]}
            disableSelectionOnClick
            sx={customazingDataGrid}
          />
        </div>
      </div>
    </>
  );
};

export default Applications;
