import { createSlice } from "@reduxjs/toolkit";

const candidateData = [
  {
    id: 1,
    candidates: "Snow",
    jobname: "TSR",
    viewed: "Yes",
    recieved: "Oct 9, 2014",
  },
  {
    id: 2,
    candidates: "Lannister",
    jobname: "TSR",
    viewed: "No",
    recieved: "Jan 3, 2012",
  },
  {
    id: 3,
    candidates: "Lannister",
    jobname: "CSR",
    viewed: "Yes",
    recieved: "Mar 9, 2003",
  },
  {
    id: 4,
    candidates: "Stark",
    jobname: "TSR",
    viewed: "Yes",
    recieved: "Oct 9, 2012",
  },
  {
    id: 5,
    candidates: "Targaryen",
    jobname: "TSR",
    viewed: "No",
    recieved: "Dec 2, 2020",
  },
  {
    id: 6,
    candidates: "Melisandre",
    jobname: "CSR",
    viewed: "No",
    recieved: "Jul 11, 2022",
  },
  {
    id: 7,
    candidates: "Clifford",
    jobname: "CSR",
    viewed: "Yes",
    recieved: "Sep 9, 2006",
  },
  {
    id: 8,
    candidates: "Frances",
    jobname: "TSR",
    viewed: "No",
    recieved: "Jan 12, 2019",
  },
  {
    id: 9,
    candidates: "Roxie",
    jobname: "CSR",
    viewed: "Yes",
    recieved: "Jun 23, 2012",
  },
];
const initialState = { candidateData };

const candidateSlice = createSlice({
  name: "candidate",
  initialState: initialState,
  reducers: {
    AddCandidate: (state, action) => {
      console.log(action.payload.payload);
      const newData = [action.payload.payload];
      state.candidateData = [...state.candidateData, ...newData];
    },
  },
});

export const CandidateAction = candidateSlice.actions;

export default candidateSlice.reducer;
