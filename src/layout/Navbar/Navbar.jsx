import { NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
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
import MenuIcon from "@mui/icons-material/Menu";
import navLinks from "../../data/navLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, setUser, setWithToken } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.clear();
    setWithToken(false);
    setUser(null);
    navigate("/login");
  }

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
                fontSize="23px"
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
                sx={{
                  display: { xs: "none", sm: "flex" },
                  alignItems: "center",
                }}
              >
                {navLinks.map((i) => (
                  <Box
                    key={i.title}
                    component={NavLink}
                    to={i.path}
                    onClick={i.title === "CERRAR SESIÓN" ? handleLogout : null}
                    sx={{
                      fontSize: {
                        sm: "11px",
                        md: "15px",
                      },
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {i.title}
                    {[
                      "ADMINISTRACIÓN",
                      `HOLA ${user?.username}`,
                      "INGRESO | REGISTRO",
                      "CERRAR SESIÓN",
                    ].includes(i.title) &&
                      i.icon && (
                        <Box sx={{ ml: 1 }}>
                          <i.icon />
                        </Box>
                      )}
                  </Box>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Toolbar>

        <Drawer
          open={open}
          anchor="left"
          onClose={() => setOpen(false)}
          sx={{ display: { xs: "flex", sm: "none" } }}
        >
          <NavDrawer
            navLinks={navLinks(user)}
            NavLink={NavLink}
            setOpen={setOpen}
            handleLogout={handleLogout}
          />
        </Drawer>
      </AppBar>
    </>
  );
};

export default Navbar;
