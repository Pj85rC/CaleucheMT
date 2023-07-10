import { NavLink } from "react-router-dom";
import { useState } from "react";
import NavDrawer from "./NavDrawer";
import {
  AppBar,
  Box,
  Drawer,
  Grid,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = ({ navLinks }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "#F9F9F9", color: "#09071D", height: "90px" }}
      >
        <Toolbar sx={{ height: "100%", display: "flex", alignItems: "center" }}>
          <Grid container alignItems="center">
            <Grid item xs={12} sm={3} md={4} container alignItems="center">
              <IconButton
                edge="start"
                color="inherit"
                size="large"
                onClick={() => setOpen(true)}
                sx={{ display: { xs: "flex", sm: "none" } }}
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

            <Grid item xs={false} sm={9} md={8}>
              <Stack
                className="myStack"
                direction="row"
                sx={{ display: { xs: "none", sm: "flex" } }}
              >
                {navLinks.map((i) => {
                  const IconComponent =
                    i.icon === "AccountCircle" ? AccountCircle : null;
                  return (
                    <Box
                      key={i.title}
                      component={NavLink}
                      to={i.path}
                      sx={{
                        fontSize: {
                          sm: "11px",
                          md: "15px",
                        },
                      }}
                    >
                      {IconComponent && <IconComponent />}
                      {i.title}
                    </Box>
                  );
                })}
              </Stack>
            </Grid>
          </Grid>

          <IconButton
            sx={{ display: { xs: "none", sm: "block" } }}
            edge="end"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>

        <Drawer
          open={open}
          anchor="left"
          onClose={() => setOpen(false)}
          sx={{ display: { xs: "flex", sm: "none" } }}
        >
          <NavDrawer navLinks={navLinks} NavLink={NavLink} setOpen={setOpen} />
        </Drawer>
      </AppBar>
    </>
  );
};

export default Navbar;
