import React, { useState } from "react";
import CandidatePageHeader from "../CandidatePageHeader/CandidatePageHeader";
import CandidateSection from "../CandidateSection/CandidateSection";

const Candidate = () => {
  const [query, setquery] = useState();

  const searchHandler = (query) => {
    setquery(query);
    // console.log(query);
  };
  return (
    <>
      <CandidatePageHeader searchHandler={searchHandler} />
      <CandidateSection query={query} />
    </>
  );
};

export default Candidate;
