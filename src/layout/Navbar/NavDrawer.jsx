import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const NavDrawer = ({ navLinks, NavLink, setOpen, handleLogout }) => {
  return (
    <Box sx={{ width: 250, bgcolor: "#F9F9F9" }}>
      <nav>
        <List>
          {navLinks.map((i) => {
            const IconComponent = i.icon;

            return (
              <ListItem disablePadding key={i.title}>
                <ListItemButton
                  component={NavLink}
                  to={i.path}
                  onClick={() => {
                    setOpen(false);
                    if (i.title === "CERRAR SESIÓN") {
                      handleLogout();
                    }
                  }}
                >
                  <ListItemIcon>
                    <IconComponent />
                  </ListItemIcon>
                  <ListItemText primary={i.title} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </nav>
    </Box>
  );
};

export default NavDrawer;
