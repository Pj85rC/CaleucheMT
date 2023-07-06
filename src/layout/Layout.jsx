import { Content } from "./Content";
import Navbar from "./Navbar";
import DraftsIcon from "@mui/icons-material/Drafts";
import Home from "@mui/icons-material/Home";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MediaBluetoothOnIcon from '@mui/icons-material/MediaBluetoothOn';

const navLinks = [
  {
    title: "HOME",
    path: "/",
    icon: <Home />,
  },
  {
    title: "FESTIVALES",
    path: "/festivales",
    icon: <MediaBluetoothOnIcon />,
  },
  {
    title: "QUIENES SOMOS",
    path: "/quienesSomos",
    icon: <Home />,
  },
  {
    title: "CONTÁCTANOS",
    path: "/contactanos",
    icon: <MailIcon />,
  },
  {
    title: "MI CUENTA",
    path: "/login",
    icon:  <AccountCircle />,
  },
];

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Content />
    </div>
  );
};

export default Layout;
