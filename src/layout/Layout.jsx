import { Content } from "./Content";
import Navbar from "./Navbar";
import DraftsIcon from "@mui/icons-material/Drafts";
import Home from "@mui/icons-material/Home";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";

const navLinks = [
  {
    title: "Home",
    path: "/",
    icon: <Home />,
  },
  {
    title: "Login",
    path: "/login",
    icon: <MailIcon />,
  },
  {
    title: "Registro",
    path: "/registro",
    icon: <DraftsIcon />,
  },
];

const Layout = () => {
  return (
    <div>
      <Navbar navLinks={navLinks} />
      <Content />
    </div>
  );
};

export default Layout;
