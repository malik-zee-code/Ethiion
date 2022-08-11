import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import React from "react";
import { useState } from "react";
import Stats from "../Stats";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { styled, alpha } from "@mui/material/styles";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Archive, Edit, Logout, Preview, Upload } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const Jobs = ({ job, location }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [moreanchorEl, moresetAnchorEl] = useState(null);
  const moreopen = Boolean(moreanchorEl);
  const morehandleClick = (event) => {
    moresetAnchorEl(event.currentTarget);
  };
  const morehandleClose = () => {
    moresetAnchorEl(null);
  };

  return (
    <div className="w-[100%] min-h-[150px] mt-4  bg-white rounded-md p-7 ">
      <div className="flex border-b-2 items-center pb-3">
        <span className="italic text-[16px] font-bold underline mr-8 uppercase">
          {job}
        </span>
        <span className="text-slate-500 capitalize ">{location}</span>
        <div className="ml-auto">
          <button className="py-2 px-3 rounded-sm mr-3 font-semibold bg-[#8635B0] text-white outline-none hover:bg-[#722b95] border-none">
            Locate Candidate
          </button>
          <Button
            id="demo-customized-button"
            aria-controls={open ? "demo-customized-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            variant="contained"
            disableElevation
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
            className="shadow-none bg-[#02a882] hover:bg-[#24b492] rounded-sm py-2 px-3"
          >
            Publish
          </Button>
          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} disableRipple>
              Used Internally
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Used Confidentially
            </MenuItem>
          </StyledMenu>
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={moreopen ? "long-menu" : undefined}
            aria-expanded={moreopen ? "true" : undefined}
            aria-haspopup="true"
            onClick={morehandleClick}
            className='ml-3'
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={moreanchorEl}
            open={moreopen}
            onClose={morehandleClose}
            PaperProps={{
              style: {
                width: "25ch",
                padding: "10px",
              },
            }}
          >
            <MenuItem onClick={morehandleClose}>
              {" "}
              <Preview className="mr-3" /> Preview Job
            </MenuItem>
            <MenuItem onClick={morehandleClose}>
              {" "}
              <Edit className="mr-3" /> Edit Job
            </MenuItem>
            <MenuItem onClick={morehandleClose}>
              <Archive className="mr-3" /> Archive Job
            </MenuItem>
            <MenuItem onClick={morehandleClose}>
              {" "}
              <FontAwesomeIcon
                icon={faRetweet}
                className="mr-3 w-[20px]"
              />{" "}
              Refer Candidate
            </MenuItem>
            <MenuItem onClick={morehandleClose}>
              {" "}
              <Upload className="mr-3" /> Upload Candidates
            </MenuItem>
            <MenuItem onClick={morehandleClose}>
              {" "}
              <FileCopyIcon className="mr-3" /> Clone Job
            </MenuItem>
            <MenuItem onClick={morehandleClose}>
              {" "}
              <Logout className="mr-3" /> Leave Job
            </MenuItem>
          </Menu>
        </div>
      </div>

      <div className="grid grid-cols-3">
        <Stats
          title="Applied"
          value="10"
          className="bg-[#f8f8f8]  m-4 min-w-[180px] h-[150px] flex items-center"
        />
        <Stats
          title="Phone Screening"
          value="10"
          className="bg-[#f8f8f8]  m-4 min-w-[180px] h-[150px] flex items-center"
        />
        <Stats
          title="Assessment"
          value="10"
          className="bg-[#f8f8f8]  m-4 min-w-[180px] h-[150px] flex items-center"
        />
        <Stats
          title="Interview"
          value="10"
          className="bg-[#f8f8f8]  m-4 min-w-[180px] h-[150px] flex items-center"
        />
        <Stats
          title="Offer"
          value="10"
          className="bg-[#f8f8f8]  m-4 min-w-[180px] h-[150px] flex items-center"
        />
      </div>
    </div>
  );
};

export default Jobs;
