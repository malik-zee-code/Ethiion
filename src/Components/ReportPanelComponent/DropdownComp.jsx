import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DropdownComp = ({ ItemText, collapsed, icon }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <ListItemButton onClick={() => setOpen(!open)}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={ItemText} className="font-medium" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {collapsed?.map((m) => (
          <List component="div" disablePadding onClick={() => navigate(m.url)}>
            <ListItemButton sx={{ pl: 4 }} className='pl-20'>
              <ListItemText primary={m.name} />
            </ListItemButton>
          </List>
        ))}
      </Collapse>
    </>
  );
};

export default DropdownComp;
