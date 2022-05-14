import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import React, { useState } from "react";

const ButtonDown = (props) => {
  const [toggle, setToggle] = useState(false);
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={(event) => {
        setToggle((prevState) => !prevState);
        props.handleData(toggle)
        // handleClick(event, cellValues);
      }}
      style={{ marginLeft: "40%" }}
    >
      <FontAwesomeIcon icon={faAngleDown} />
    </Button>
  );
};

export default ButtonDown;
