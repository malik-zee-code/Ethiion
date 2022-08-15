import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, IconButton, Menu, MenuItem, Rating } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import React, { useState } from "react";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import EditIcon from "@mui/icons-material/Edit";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { Telegram } from "@mui/icons-material";
import ChangeStage from "./ChangeStage";
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

    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
    },
  },
}));

const CandidateComp = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="mt-6">
      <div className="w-full h-[400px] flex flex-col">
        <div className=" flex mt-4">
          <button className="ml-auto px-3 py-2 bg-[#02a882] hover:bg-[#33967f]  font-semibold text-white rounded-md mr-3">
            Add Candidate
          </button>
        </div>
        <input
          type="text"
          className="ml-auto p-2 outline-none mt-3 mr-3 bg-[#eaeaea] rounded-md"
          placeholder="Search using Resume"
        />
        <div className="flex-1 w-[100%] flex flex-col items-center">
          <span className="text-2xl font-bold">Search Candidate</span>
          {/* */}

          <div className="flex flex-col ">
            <input
              type="text"
              placeholder="Name, Location etc"
              className="p-3 w-[500px] mt-10 outline-none bg-[#eaeaea]"
            />

            <div className="mt-9 flex justify-center">
              <button className="p-4 flex flex-col items-center hover:bg-[#02a882] hover:text-white font-semibold rounded-md">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-center h-6 mb-4"
                />
                Search Candidate
              </button>

              <button className=" w-[200px] ml-4 p-4 flex flex-col items-center hover:bg-[#02a882] hover:text-white font-semibold rounded-md">
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  className="text-center h-6 mb-4"
                />
                Close
              </button>
            </div>
          </div>
          {/*  */}
        </div>
        <div className="  mt-10 bg-white min-h-[500px] m-4 rounded-md p-6">
          <div className="w-full flex ">
            <span className="font-semibold text-2xl">Candidate</span>
            <div className="ml-auto">
              <span className="text-xl">Status</span>
              <select
                name=""
                id=""
                className="p-2 ml-3 outline-none rounded-md mr-5"
              >
                <option value="all" defaultChecked>
                  All
                </option>
                <option value="one">One</option>
              </select>

              <span className="text-xl">Job Health</span>
              <select
                name=""
                id=""
                className="p-2 ml-3 outline-none rounded-md"
              >
                <option value="all" defaultChecked>
                  All
                </option>
                <option value="one">One</option>
              </select>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className=" w-full bg-white rounded-2xl border-separate border-spacing-7">
              {/* <!-- head --> */}
              <thead className="text-slate-400 ">
                <tr className="">
                  <th>Candidate Info</th>
                  <th>Job </th>
                  <th>Status</th>
                  <th>Overall Rating</th>
                  <th>Received</th>
                  <th>View</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {" "}
                    <a href="/#" className="text-indigo-600 underline italic">
                      Zain
                    </a>{" "}
                  </td>
                  <td>
                    {" "}
                    <Link to={"/csr"} className="text-indigo-600">
                      {" "}
                      CSR
                    </Link>
                  </td>
                  <td>
                    <ChangeStage selected="Interview" />
                  </td>
                  <td>
                    <Rating
                      name="size-large"
                      defaultValue={4}
                      precision={0.5}
                    />
                  </td>
                  <td>25 Oct, 2022</td>
                  <td>
                    <IconButton aria-label="delete">
                      <RemoveRedEyeIcon />
                    </IconButton>
                  </td>
                  <td>
                    <Button
                      id="demo-customized-button"
                      aria-controls={open ? "demo-customized-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      disableElevation
                      onClick={handleClick}
                      className="shadow-none text-black rounded-full  h-[50px] "
                    >
                      <FontAwesomeIcon icon={faEllipsis} />
                    </Button>
                    <StyledMenu
                      id="demo-customized-menu"
                      MenuListProps={{
                        "aria-labelledby": "demo-customized-button",
                      }}
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      className="shadow-lg shadow-black"
                    >
                      <MenuItem onClick={handleClose} disableRipple>
                        <EditIcon />
                        Edit
                      </MenuItem>
                      <MenuItem onClick={handleClose} disableRipple>
                        <FileCopyIcon />
                        Duplicate
                      </MenuItem>
                    </StyledMenu>
                  </td>
                </tr>
                {/* 2 */}

                <tr>
                  <td>
                    {" "}
                    <a href="/#" className="text-indigo-600 underline italic">
                      Sheldon
                    </a>{" "}
                  </td>
                  <td>
                    {" "}
                    <Link to={"/csr"} className="text-indigo-600">
                      {" "}
                      TSR
                    </Link>
                  </td>
                  <td>
                    <ChangeStage selected="Applied" />
                  </td>
                  <td>
                    <Rating
                      name="size-large"
                      defaultValue={2.5}
                      precision={0.5}
                    />
                  </td>
                  <td>13 Apr, 2001</td>
                  <td>
                    <IconButton aria-label="delete">
                      <RemoveRedEyeIcon />
                    </IconButton>
                  </td>
                  <td>
                    <Button
                      id="demo-customized-button"
                      aria-controls={open ? "demo-customized-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      disableElevation
                      onClick={handleClick}
                      className="shadow-none text-black rounded-full  h-[50px] p-1"
                    >
                      <FontAwesomeIcon icon={faEllipsis} />
                    </Button>
                    <StyledMenu
                      id="demo-customized-menu"
                      MenuListProps={{
                        "aria-labelledby": "demo-customized-button",
                      }}
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      className="shadow-lg shadow-black"
                    >
                      <MenuItem onClick={handleClose} disableRipple>
                        <Telegram />
                        Invite
                      </MenuItem>
                      <MenuItem onClick={handleClose} disableRipple>
                        <EditIcon />
                        Edit
                      </MenuItem>
                      <MenuItem onClick={handleClose} disableRipple>
                        <FileCopyIcon />
                        Duplicate
                      </MenuItem>
                    </StyledMenu>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateComp;
