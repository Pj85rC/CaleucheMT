import Home from "@mui/icons-material/Home";
import MediaBluetoothOnIcon from "@mui/icons-material/MediaBluetoothOn";
import ContactSupportSharpIcon from "@mui/icons-material/ContactSupportSharp";
import MailIcon from "@mui/icons-material/Mail";
import AdminPanelSettings from "@mui/icons-material/AdminPanelSettings";
import { AccountCircle, Login, Logout } from "@mui/icons-material";

const navLinks = (user) => [
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
  user?.role === "admin" && {
    title: "ADMINISTRACIÓN",
    path: "/admin",
    icon: AdminPanelSettings,
  },
  user?.role === "user" && {
    title: `HOLA ${user.userName}`,
    path: "/profile",
    icon: AccountCircle,
  },
  !user?.role && {
    title: "INGRESO | REGISTRO",
    path: "/login",
    icon: Login,
  },
  user?.role && {
    title: "CERRAR SESIÓN",
    path: "/login",
    icon: Logout,
  },
].filter(Boolean);

export default navLinks;
