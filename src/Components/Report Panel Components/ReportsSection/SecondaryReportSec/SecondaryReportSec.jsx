import {
  faAngleDown,
  faAngleUp,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";
import ReportSection from "../ReportSection.component";
import { DataGrid } from "@mui/x-data-grid";
import Status from "../../../Application Panel Component/Status/Status";

const customazingDataGrid = {
  "& .MuiDataGrid-columnHeaders": {
    textTransform: "uppercase",
    fontFamily: '"Varela Round", sans-serif',

    "& .MuiDataGrid-columnHeaderTitle": {
      fontWeight: "600",
      fontSize: "16px",
      opacity: "0.8",
    },
  },
  "& .MuiDataGrid-virtualScrollerRenderZone": {
    "& .MuiDataGrid-row": {
      // "&:nth-child(2n)": { backgroundColor: "rgba(235, 235, 235, .7)" },
      "& .MuiDataGrid-cell": {
        "&:nth-child(1)": {
          fontWeight: "550",
          fontSize: "15px",
          textTransform: "capitalize",
          opacity: "0.7",
        },
      },
    },
  },
};

const columns = [
  {
    field: "reportName",
    headerName: "Report Name",
    width: 280,
  },
  {
    field: "description",
    headerName: "Description",
    width: 700,
  },
];

const rows = [
  {
    id: 1,
    reportName: "Application Conversion by job",
    description: ''
  },
  {
    id: 2,
    reportName: "hiring pipeline by deparatment",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus iste dolores sapiente esse autem, blanditiis beatae tenetur! Deserunt architecto nobis libero voluptates eum doloribus illo placeat. Necessitatibus eum natus numquam.",
  },
  {
    id: 3,
    reportName: "hiring pipeline by hiring manager",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus iste dolores sapiente esse autem, blanditiis beatae tenetur! Deserunt architecto nobis libero voluptates eum doloribus illo placeat. Necessitatibus eum natus numquam.",
  },
  {
    id: 4,
    reportName: "hiring pipeline by job",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus iste dolores sapiente esse autem, blanditiis beatae tenetur! Deserunt architecto nobis libero voluptates eum doloribus illo placeat. Necessitatibus eum natus numquam.",
  },
  {
    id: 5,
    reportName: "interviews by canidate",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus iste dolores sapiente esse autem, blanditiis beatae tenetur! Deserunt architecto nobis libero voluptates eum doloribus illo placeat. Necessitatibus eum natus numquam.",
  },
  {
    id: 6,
    reportName: "interviews by department",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus iste dolores sapiente esse autem, blanditiis beatae tenetur! Deserunt architecto nobis libero voluptates eum doloribus illo placeat. Necessitatibus eum natus numquam.",
  },
  {
    id: 7,
    reportName: "interviews by interviewer",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus iste dolores sapiente esse autem, blanditiis beatae tenetur! Deserunt architecto nobis libero voluptates eum doloribus illo placeat. Necessitatibus eum natus numquam.",
  },
];
const SecondaryReportSec = () => {
  return (
    <>
      <ReportSection
        title="Secondary Report"
        actionIcons={[faAngleDown, faAngleUp]}
        icon={faChartBar}
      >
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            loading={rows.length === 0}
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
            sx={customazingDataGrid}
          />
        </div>
      </ReportSection>
    </>
  );
};

export default SecondaryReportSec;
