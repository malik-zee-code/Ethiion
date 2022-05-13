import { createSlice } from "@reduxjs/toolkit";

const initialToggleState = {
  workflowToggle: false,
};

const toggleSlice = createSlice({
  name: "toggle",
  initialState: initialToggleState,
  reducers: {
    Settoggle: (state) => {
      state.workflowToggle = !state.workflowToggle;
    },
  },
});

export const toggleAction = toggleSlice.actions;

export default toggleSlice.reducer;
