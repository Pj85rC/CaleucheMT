import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Caleuche
        </Typography>
        <Button component={NavLink} to="/" color="inherit">
          Home
        </Button>
        <Button component={NavLink} to="/festivales" color="inherit">
          Festivales
        </Button>
        <Button component={NavLink} to="/quienesSomos" color="inherit">
          Quienes Somos
        </Button>
        <Button component={NavLink} to="/contactanos" color="inherit">
          Contáctanos
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
