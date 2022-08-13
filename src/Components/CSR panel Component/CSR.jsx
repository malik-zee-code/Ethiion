import {
  faAngleDown,
  faPerson,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Stats from "../Stats";
import person from "../../Assets/person1.jpg";
import {
  Button,
  Checkbox,
  Fade,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import CardCSR from "../CardCSR";
import Alert from "../Jobs Panel/AlertComp";
import MenuIcon from "@mui/icons-material/Menu";
import EmailIcon from "@mui/icons-material/Email";
import {
  AddComment,
  Assessment,
  Close,
  Event,
  ExpandMore,
  History,
} from "@mui/icons-material";
import ElevatorSharpIcon from "@mui/icons-material/ElevatorSharp";

const CSR = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="p-10">
      <div className="flex  ">
        <div className="text-2xl font-bold">
          <span className="mr-3">CSR</span>
          <FontAwesomeIcon icon={faAngleDown} />
        </div>

        <div className="ml-auto">
          <button className=" font-semibold px-3 py-2 rounded-sm ml-4  bg-[#02A882] text-white outline-none hover:bg-[#038466] border-none mr-7">
            Add Candidate
          </button>
          <button className="font-semibold px-3 py-2 rounded-sm bg-[#8635B0]  text-white outline-none hover:bg-[#722b95] border-none">
            Edit Job
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <Stats
          title="Applied"
          value="10"
          className="bg-[#ffffff]  m-4 min-w-[180px] h-[200px] flex items-center"
        />
        <Stats
          title="Phone Screening"
          value="10"
          className="bg-[#ffffff]  m-4 min-w-[180px] h-[200px] flex items-center"
        />
        <Stats
          title="Assessment"
          value="10"
          className="bg-[#ffffff]  m-4 min-w-[180px] h-[200px] flex items-center"
        />
        <Stats
          title="Interview"
          value="10"
          className="bg-[#ffffff]  m-4 min-w-[180px] h-[200px] flex items-center"
        />
        <Stats
          title="Offer"
          value="10"
          className="bg-[#ffffff]  m-4 min-w-[180px] h-[200px] flex items-center"
        />
      </div>

      <div className="mt-4 w-full min-h-[800px] flex ">
        <div className="w-[700px] h-full bg-white flex flex-col rounded-md p-10">
          <div className="flex  justify-around">
            <Stats
              title="Qualified"
              value="10"
              className="bg-[#ffffff]  m-4 min-w-[180px] h-[200px] flex items-center shadow-lg"
            />
            <Stats
              title="Disqualified"
              value="10"
              className=" bg-[#ffffff]  m-4 min-w-[180px] h-[200px] flex items-center shadow-lg"
            />
          </div>

          <input
            type="text"
            placeholder="Search"
            className=" outline-none p-3 mt-4 w-full rounded-md bg-[#f4f4f4]"
          />

          <div className="flex items-center ">
            <Checkbox
              {...label}
              defaultChecked
              sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
            />
            <span>Select All</span>

            <div className="ml-auto flex ">
              <select name="" id="" className=" bg-white p-1">
                <option value="byactions" className=" bg-white">
                  By Actions
                </option>
              </select>

              <select name="" id="" className=" bg-white p-1">
                <option value="bydate" className=" bg-white ">
                  By date
                </option>
              </select>
            </div>
          </div>
          <CardCSR image={person} name="Julia Robert" role="Hiring Manager" />
          <CardCSR image={person} name="Julia Robert" role="Hiring Manager" />
          <CardCSR image={person} name="Julia Robert" role="Hiring Manager" />
          <CardCSR image={person} name="Julia Robert" role="Hiring Manager" />
        </div>

        <div className="flex flex-col w-full ml-5">
          <div className="flex w-full h-[60px] bg-white rounded-md p-3">
            <div className="flex w-full h-full items-center">
              <IconButton aria-label="delete" className="h-10 mr-5">
                <MenuIcon />
              </IconButton>
              <IconButton aria-label="delete" className="h-10 mr-5">
                <EmailIcon />
              </IconButton>
              <IconButton aria-label="delete" className="h-10 mr-5">
                <AddComment />
              </IconButton>
              <IconButton aria-label="delete" className="h-10 mr-5">
                <ElevatorSharpIcon />
              </IconButton>
              <IconButton aria-label="delete" className="h-10 mr-5">
                <Close />
              </IconButton>
              <IconButton aria-label="delete" className="h-10 mr-5">
                <History />
              </IconButton>
              <IconButton aria-label="delete" className="h-10 mr-5">
                <Event />
              </IconButton>
              <IconButton aria-label="delete" className="h-10 mr-5">
                <Assessment />
              </IconButton>
              <Button
                id="fade-button"
                aria-controls={open ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                className="ml-auto py-2 px-3  rounded-sm bg-[#02a882] text-white font-semibold hover:bg-[#129577]"
              >
                Move to Offers
                <ExpandMore className="ml-2"/>
              </Button>
              <Menu
                id="fade-menu"
                MenuListProps={{
                  "aria-labelledby": "fade-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
          </div>
          <div className="bg-white h-full rounded-md   flex ">
            {/* side bar */}
            <div className="w-[200px] p-4 bg-[#F3F3F3] h-full flex flex-col flex-none">
              <button className="font-bold mb-3">Filters</button>
              <div className="flex flex-col">
                <span className="uppercase font-bold ">Automated Actions</span>
                <button className=" mt-3 rounded-full bg-[#e9e9e9] py-2 font-bold text-[#c4c3c3]">
                  Past
                </button>
                <button className=" mt-3 rounded-full bg-[#e9e9e9] py-2 font-bold text-[#c4c3c3]">
                  Failed
                </button>
              </div>
              <div className="flex flex-col">
                <span className="uppercase font-bold ">Jobs</span>
                <button className=" mt-3 rounded-full bg-[#e9e9e9] py-2 font-bold text-[#c4c3c3]">
                  Internal
                </button>
                <button className=" mt-3 rounded-full bg-[#e9e9e9] py-2 font-bold text-[#c4c3c3]">
                  Bulk
                </button>
                <button className=" mt-3 rounded-full bg-[#e9e9e9] py-2 font-bold text-[#c4c3c3]">
                  Bulk
                </button>
              </div>
              <div className="flex flex-col">
                <span className="uppercase font-bold ">Jobs</span>
                <button className=" mt-3 rounded-full bg-[#e9e9e9] py-2 font-bold text-[#c4c3c3]">
                  Internal
                </button>
                <button className=" mt-3 rounded-full bg-[#e9e9e9] py-2 font-bold text-[#c4c3c3]">
                  Bulk
                </button>
              </div>
            </div>
            {/* Alerts */}

            <div className="flex-1 ">
              <div className="m-4 ">
                <div className="flex justify-between">
                  <span className="text-xl font-semibold ">
                    Activity Thread
                  </span>
                  <input
                    type="date"
                    name=""
                    id=""
                    className=" p-1 outline-none "
                  />
                </div>

                <div className="flex mt-4 items-center">
                  <div className="w-[70px] h-[70px] bg-[#8635B0] rounded-full flex items-center justify-center mr-4">
                    <FontAwesomeIcon
                      icon={faPerson}
                      className="w-[30px] h-[30px] text-white "
                    />
                  </div>{" "}
                  <div className="w-[70px] h-[70px] bg-[#8635B0] rounded-full flex items-center justify-center mr-4">
                    <img
                      alt=""
                      src={person}
                      className=" text-white w-full h-full rounded-full object-cover "
                    />
                  </div>{" "}
                  <IconButton className="w-[70px] h-[70px] bg-[#8635B0] hover:bg-[#a559ca] rounded-full flex items-center justify-center mr-4">
                    <FontAwesomeIcon
                      icon={faPlus}
                      className="w-[30px] h-[30px] text-white "
                    />
                  </IconButton>{" "}
                  <div className="ml-auto">
                    <span className="text-xl">2 Watchers</span>
                    <button className="p-2 bg-[#efefef] ml-3 rounded-md ">
                      Watch
                    </button>
                  </div>
                </div>
              </div>
              <Alert title="Launch Date" btnTitle="Go To inbox" />
              <Alert title="Marked the Interview" btnTitle="Change Status" />
              <Alert title="Launch Date" btnTitle="Go To inbox" />
              <Alert title="Marked the Interview" btnTitle="Change Status" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSR;
