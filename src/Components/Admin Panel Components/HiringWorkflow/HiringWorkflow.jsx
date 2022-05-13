import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Headers from "../Template-Headers/Headers";
import WorkflowItems from "../WorkflowItems/WorkflowItems";
import classes from "./HiringWorkflow.module.css";
import { toggleAction } from "../../../redux/toggle-store";
import NewWorkflow from "../../Modals/NewWorkflow/NewWorkflow";
import Card from "../../../UI/Card";

const HiringWorkflow = (props) => {
  const toggleWorkflow = useSelector((state) => state.toggle.workflowToggle);

  const dispatch = useDispatch();

  const newWorkflowFormHandler = () => {
    dispatch(toggleAction.Settoggle());
  };

  const workflows = useSelector((state) => state.template.workflows);

  return (
    <Card className={` ${classes.Card} ${props.className} `}>
      <Headers
        onClick={newWorkflowFormHandler}
        btnText="+ Create Workflow"
        title="Hiring Workflow"
        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />
      {toggleWorkflow && <NewWorkflow />}
      {workflows.map((w) => {
        return (
          <WorkflowItems
            key={Math.random()}
            workflow={w.workflow}
            jobsUsed={w.used}
          />
        );
      })}
    </Card>
  );
};

export default HiringWorkflow;
