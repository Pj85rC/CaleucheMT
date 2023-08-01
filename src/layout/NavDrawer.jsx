import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const NavDrawer = ({ navLinks, NavLink, setOpen }) => {
  return (
    <Box sx={{ width: 250, bgcolor: "#F9F9F9" }}>
      <nav>
        <List>
          {navLinks.map((i) => (
            <ListItem disablePadding key={i.title}>
              <ListItemButton
                component={NavLink}
                to={i.path}
                onClick={() => setOpen(false)}
              >
                <ListItemIcon>{React.createElement(i.icon)}</ListItemIcon>
                <ListItemText primary={i.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
};

export default NavDrawer;
