import {
  // Badge,
  // Button,
  AppBar,
  Box,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { NavDrawer } from "./NavDrawer";

const Navbar = ({ navLinks }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar
        position="fixed"
        color="transparent"
        sx={{ backgroundColor: "#F9F9F9", color: "#09071D" }}
      >
        <Toolbar>
          <IconButton
            color="#09071D"
            size="large"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "flex", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component={NavLink}
            to="/"
            sx={{ flexGrow: 1 }}
          >
            Caleuche
          </Typography>
          {/* <Stack direction="row" spacing={2} alignItems="center"  > */}
          <Stack sx={{ display: { xs: "none", sm: "block" } }}>
            {navLinks.map((i) => (
              <Link key={i.title} component={NavLink} to={i.path}>
                {i.title}
              </Link>
            ))}

            {/* <Link component={NavLink} to="/" color="inherit">
            Home
          </Link>
          <Link component={NavLink} to="/festivales">
            Festivales
          </Link>
          <Link component={NavLink} to="/quienesSomos">
            Quienes Somos
          </Link>
          <Link component={NavLink} to="/contactanos">
            Contáctanos
          </Link>
          <IconButton color="#09071D">
            
            <MailIcon /> */}

            {/* </IconButton>
          <IconButton color="#09071D">
            <NotificationsIcon />
          </IconButton>
          <IconButton color="#09071D">
            <AccountCircle />
          </IconButton> */}
          </Stack>
        </Toolbar>
      </AppBar>

      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{ display: { xs: "none", sm: "block" } }}
      >
        <NavDrawer 
        navLinks={navLinks} 
        NavLink={NavLink} 
        setOpen={setOpen}
        />
      </Drawer>
    </>
  );
};

export default Navbar;
