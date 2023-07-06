import {
  Badge,
  // Button,
  AppBar,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      color="transparent"
      sx={{ backgroundColor: "#F9F9F9", color: "#09071D" }}
    >
      <Toolbar>
        <IconButton color="#09071D">
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
        <Stack direction="row" spacing={2} alignItems="center" >
          
          <Link component={NavLink} to="/" color="inherit">
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
            {/* <Badge badgeContent={4} color="#1F1B4E"> */}
            <MailIcon />
            {/* </Badge> */}
          </IconButton>
          <IconButton color="#09071D">
            <NotificationsIcon />
          </IconButton>
          <IconButton color="#09071D">
            <AccountCircle />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
