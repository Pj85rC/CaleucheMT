import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export const NavDrawer = ({ navLinks, NavLink, setOpen }) => {
  return (
    <Box sx={{ width: 250, bgcolor: "#F9F9F9" }}>
      <nav>
        <List>
          {navLinks.map((i) => (
            <ListItem disablePadding key={i.title}>
              <ListItemButton component={NavLink} to={i.path} onClick={() => setOpen(false)}>
                <ListItemIcon>{i.icon}</ListItemIcon>
                <ListItemText primary={i.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
};
