import { Box } from "@mui/system";
import React, { useState } from "react";
import PageHeader from "../../../UI/PageHeader";
import classes from "./CandidatePageHeader.module.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ButtonUI from "../../../UI/button/Button";
import StarsRating from "stars-rating";
import { Modal, Stack, TextField, Typography } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { Button } from "@mui/material";
import { CandidateAction } from "../../../redux/candidate-reducer";
import { useDispatch } from "react-redux";

const customDesignSelect = {
  "& .MuiSelect-select": {
    minHeight: "20px",
  },
};
const CandidatePageHeader = (props) => {
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [viewed, setViewed] = useState("");
  const [date, setDate] = useState(new Date());

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onChangeHandler = (e) => {
    props.searchHandler(e.target.value);
  };
  const dispatch = useDispatch();
  const handleSubmit = () => {
    const data = {
      id: Math.floor(Math.random() * 30),
      candidates: name,
      jobname: job,
      viewed: viewed,
      recieved: date.toString(),
    };
    console.log(data);
    dispatch(CandidateAction.AddCandidate({ payload: data }));
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    height: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    border: "none",
    borderRadius: "8px",
  };
  return (
    <>
      <PageHeader
        className={`${classes.pageHeader} ${toggle ? classes.expand : ""}`}
      >
        <div className={classes.container}>
          <div className={classes.title}>
            {" "}
            {toggle ? "Search Candidate" : "Candidate"}
          </div>
          <div className={classes.actions}>
            {toggle ? (
              ""
            ) : (
              <button
                className={classes.btn}
                onClick={() => setToggle((prevState) => !prevState)}
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            )}

            <ButtonUI className={classes.button} onClick={handleOpen}>
              + Add Candidate
            </ButtonUI>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              // style={{background}}
            >
              <Box
                sx={style}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Add a Canidate
                </Typography>
                <div>
                  <input
                    type="text"
                    className={classes.inputSearch}
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    style={{ width: "100%" }}
                  />
                </div>
                <div style={{}}>
                  <Box sx={{ minWidth: 0 }} className={classes.dropdown}>
                    <FormControl style={{ width: "10vw" }}>
                      <InputLabel id="demo-simple-select-label">
                        Any Job
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        //   value={age}
                        label="Age"
                        className={classes.select}
                        sx={customDesignSelect}
                        onChange={(e) => setJob(e.target.value)}
                      >
                        <MenuItem value={10}>CSR</MenuItem>
                        <MenuItem value={20}>TSR</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <Box sx={{ minWidth: 0 }} className={classes.dropdown}>
                    <FormControl style={{ width: "10vw" }}>
                      <InputLabel id="demo-simple-select-label">
                        Viewed
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        //   value={age}
                        label="Age"
                        className={classes.select}
                        sx={customDesignSelect}
                        //   onChange={handleChange}
                        onChange={(e) => setViewed(e.target.value)}
                      >
                        <MenuItem value={"Yes"}>Yes</MenuItem>
                        <MenuItem value={"No"}>No</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </div>
                <div style={{}}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack spacing={3}>
                      <MobileDatePicker
                        label="Date mobile"
                        inputFormat="MM/dd/yyyy"
                        value={date}
                        // onChange={handleChange}
                        onChange={(value) => setDate(value)}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </Stack>
                  </LocalizationProvider>
                </div>
                <Button
                  variant="contained"
                  style={{ marginTop: "10px", height: "6vh" }}
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </Box>
            </Modal>
          </div>
        </div>

        {toggle && (
          <>
            <div className={classes.search}>
              <div className={classes.Search1}>
                <input
                  type="search"
                  className={classes.inputSearch}
                  placeholder="Name"
                  onChange={onChangeHandler}
                />
                <div className={classes.twoSearches}>
                  <Box sx={{ minWidth: 0 }} className={classes.dropdown}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Any Job
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        //   value={age}
                        label="Age"
                        className={classes.select}
                        sx={customDesignSelect}

                        //   onChange={handleChange}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <Box sx={{ minWidth: 120 }} className={classes.dropdown}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Any Status
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        //   value={age}
                        label="Age"
                        //   onChange={handleChange}
                        className={classes.select}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </div>
              </div>
              <div className={classes.Search2}>
                <input
                  type="text"
                  className={classes.inputSearch}
                  placeholder="Keyword in Resume"
                />
                <div className={classes.twoSearches}>
                  <Box
                    sx={{ minWidth: 120, height: ".5rem" }}
                    className={classes.dropdown}
                  >
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Any Category
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        //   value={age}
                        label="Age"
                        className={classes.select}
                        //   onChange={handleChange}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <StarsRating
                    count={5}
                    // onChange={ratingChanged}
                    size={24}
                    color2={"#ffd700"}
                    edit={false}
                    className={classes.stars}
                  />
                </div>
              </div>
            </div>
            <div className={classes.btnAction}>
              <ButtonUI
                className={classes.button}
                style={{ backgroundColor: "#89A4F4" }}
              >
                Search Candidate
              </ButtonUI>
              <ButtonUI
                className={classes.button}
                style={{ backgroundColor: "#fff", color: "black" }}
                onClick={() => setToggle((prev) => !prev)}
              >
                Close
              </ButtonUI>
            </div>
          </>
        )}
      </PageHeader>
    </>
  );
};

export default CandidatePageHeader;
