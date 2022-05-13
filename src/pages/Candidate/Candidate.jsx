import React from "react";
import classes from "./Candidate.module.css";
import CandidateContainer from "../../Components/CandidatePanelComponent/Candidate/Candidate";

const Candidate = () => {
  return (
    <div className={classes.container}>
      <CandidateContainer />
    </div>
  );
};

export default Candidate;
