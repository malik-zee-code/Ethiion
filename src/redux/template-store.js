import { createSlice } from "@reduxjs/toolkit";

const DummyWorkflows = [
  {
    workflow: "Developer Workflow",
    used: 0,
  },
  {
    workflow: "Manager Workflow",
    used: 1,
  },
  {
    workflow: "Product",
    used: 0,
  },
  {
    workflow: "Randy's Personal Assistant",
    used: 0,
  },
  {
    workflow: "Software Engineer",
    used: 0,
  },
  {
    workflow: "Sprout Workflow",
    used: 1,
  },
  {
    workflow: "Standard Workflow",
    used: 0,
  },
  {
    workflow: "The Academy Charter School Workflow",
    used: 1,
  },
  {
    workflow: "Individual Contributor Workflow",
    used: 1,
  },
  {
    workflow: "Legacy Standard Workflow",
    used: 1,
  },
];

const DummyQuestionaries = [
  {
    questions: "Accounting Manager Questions",
  },
  {
    questions: "Custom Questions",
  },
  {
    questions: "Developer Questions",
  },
  {
    questions: "Employee Authorization",
  },
  {
    questions: "Engineer",
  },
  {
    questions: "Follow up questionaries",
  },
  {
    questions: "General Jazz.co Questionaries",
  },
  {
    questions: "Accounting Manager Questions",
  },
  {
    questions: "Accounting Manager Questions",
  },
  {
    questions: "Accounting Manager Questions",
  },
];

const initialTemplateState = {
  workflows: DummyWorkflows,
  questionaries: DummyQuestionaries,
};

const templateSlice = createSlice({
  name: "template",
  initialState: initialTemplateState,
  reducers: {
    fetchAll: (state) => {
      return state;
    },
  },
});

export const templateActions = templateSlice.actions;

export default templateSlice.reducer;
