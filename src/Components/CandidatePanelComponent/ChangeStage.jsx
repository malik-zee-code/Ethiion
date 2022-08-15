import React from "react";
import {
  Button,
  ButtonGroup,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";

const stages = [
  "Applied",
  "Phone Screening",
  "Assessment",
  "Interview",
  "Offer",
];

const ChangeStage = ({ selected }) => {
  const [openBtn, setOpenBtn] = React.useState(false);
  const anchorRef = React.useRef(null);

  console.log(stages);
  const found = stages.findIndex((s) => s === selected);
  const [selectedIndex, setSelectedIndex] = React.useState(found);

  const handleClickBtn = () => {
    console.info(`You clicked ${stages[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpenBtn(false);
  };

  const handleToggleBtn = () => {
    setOpenBtn((prevOpen) => !prevOpen);
  };

  const handleCloseBtn = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpenBtn(false);
  };
  return (
    <>
      <ButtonGroup
        variant="contained"
        ref={anchorRef}
        aria-label="split button"
        className=" text-white font-medium no-animation bg-[#8635b0] hover:bg-[#8635b0] border-none  capitalize rounded-[4px] tracking-wider mr-5"
      >
        <Button onClick={handleClickBtn} className="hover:bg-[#8635b0]">
          {stages[selectedIndex]}
        </Button>
        <Button
          size="small"
          aria-controls={openBtn ? "split-button-menu" : undefined}
          aria-expanded={openBtn ? "true" : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggleBtn}
          className='hover:bg-[#8635b0]'
        >
          <ArrowDropDown />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={openBtn}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleCloseBtn}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {stages.map((stage, index) => (
                    <MenuItem
                      key={stage}
                      disabled={index === selectedIndex}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {stage}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default ChangeStage;
