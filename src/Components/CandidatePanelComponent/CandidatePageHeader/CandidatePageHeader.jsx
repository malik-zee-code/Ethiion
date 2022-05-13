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
import Button from "../../../UI/button/Button";
import StarsRating from "stars-rating";

const customDesignSelect = {
  "& .MuiSelect-select": {
    minHeight: "20px",
  },
};
const CandidatePageHeader = (props) => {
  const [toggle, setToggle] = useState(false);
  const [searchField, setsearchField] = useState("");

  const onChangeHandler = (e) => {
    props.searchHandler(e.target.value);
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

            <Button className={classes.button}>+ Add Candidate</Button>
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
              <Button
                className={classes.button}
                style={{ backgroundColor: "#89A4F4" }}
              >
                Search Candidate
              </Button>
              <Button
                className={classes.button}
                style={{ backgroundColor: "#fff", color: "black" }}
                onClick={() => setToggle((prev) => !prev)}
              >
                Close
              </Button>
            </div>
          </>
        )}
      </PageHeader>
    </>
  );
};

export default CandidatePageHeader;
