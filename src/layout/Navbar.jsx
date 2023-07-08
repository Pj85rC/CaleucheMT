import {
  // Badge,
  // Button,
  AppBar,
  Box,
  Drawer,
  Grid,
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
        sx={{ backgroundColor: "#F9F9F9", color: "#09071D", height: "90px"  }}
        
      >
        <Toolbar sx={{height:"100%"}}  >
          <Grid container alignItems="center" >
            <Grid xs={12} sm={6} alignItems="center" container>
              <IconButton
                color="#09071D"
                size="large"
                onClick={() => setOpen(true)}
                sx={{ display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                className="title"
                variant="h6"
                component={NavLink}
                to="/"
                sx={{ flexGrow: 1 }}
              >
                Caleuche
              </Typography>
            </Grid>

            {/* <Stack direction="row" spacing={2} alignItems="center"  > */}

            <Grid sm={6}>
              <Stack
                className="myStack"
                direction="row"
                sx={{ display: { xs: "none", sm: "flex" } }}
              >
                {navLinks.map((i) => (
                  <Link key={i.title} component={NavLink} to={i.path}>
                    {i.title}
                  </Link>
                ))}
              </Stack>
            </Grid>
          </Grid>

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
        </Toolbar>
      </AppBar>

      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{ display: { xs: "flex", sm: "none" } }}
      >
        <NavDrawer navLinks={navLinks} NavLink={NavLink} setOpen={setOpen} />
      </Drawer>
    </>
  );
};

export default Navbar;
