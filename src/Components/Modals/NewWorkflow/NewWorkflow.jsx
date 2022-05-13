import React from "react";
import Modal from "../Modal/Modal";
import classes from "./NewWorkFlow.module.css";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { toggleAction } from "../../../redux/toggle-store";
import Button from "../../../UI/button/Button";

const NewWorkflow = () => {
  const dispatch = useDispatch();

  const toggleBtnHandler = () => {
    dispatch(toggleAction.Settoggle());
  };
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Modal className={classes.modal}>
          <div className="">
            <div className={classes.NewWorkflow}>
              Create New WorkFlow Here
              <Button onClick={toggleBtnHandler} className={classes.btn}>
                Close
              </Button>
            </div>
          </div>
        </Modal>,
        document.getElementById("templateModal")
      )}
    </React.Fragment>
  );
};

export default NewWorkflow;
