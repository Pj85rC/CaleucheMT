import Home from "@mui/icons-material/Home";
import MediaBluetoothOnIcon from "@mui/icons-material/MediaBluetoothOn";
import ContactSupportSharpIcon from "@mui/icons-material/ContactSupportSharp";
import MailIcon from "@mui/icons-material/Mail";
import AccountCircle from "@mui/icons-material/AccountCircle";

const navLinks = [
  {
    title: "HOME",
    path: "/",
    icon: Home,
  },
  {
    title: "FESTIVALES",
    path: "/festivales",
    icon: MediaBluetoothOnIcon,
  },
  {
    title: "QUIENES SOMOS",
    path: "/quienesSomos",
    icon: ContactSupportSharpIcon,
  },
  {
    title: "CONTÁCTANOS",
    path: "/contactanos",
    icon: MailIcon,
  },
  {
    title: "CUENTA | REGISTRO",
    path: "/login",
    icon: AccountCircle,
  },
];

export default navLinks;
