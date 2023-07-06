import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="fixed" color="transparent" sx={{ backgroundColor: '#F9F9F9', color:'#09071D' }}>
      <Toolbar>
        <Typography variant="h6" component={NavLink} to="/" sx={{ flexGrow: 1 }}>
          Caleuche
        </Typography>
        <Button component={NavLink} to="/" color="inherit">
          Home
        </Button>
        <Button component={NavLink} to="/festivales" >
          Festivales
        </Button>
        <Button component={NavLink} to="/quienesSomos" >
          Quienes Somos
        </Button>
        <Button component={NavLink} to="/contactanos" >
          Contáctanos
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
