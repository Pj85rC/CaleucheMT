import { useContext, useState } from "react";
import { login } from "../api/auth";
import { AuthContext } from "../context/AuthContext";
import { Box, Container, Divider, Typography } from "@mui/material";
import { Input } from "../components/UI/Input";
import { Buttons } from "../components/UI/Buttons";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { Modal } from "../components/UI/Modal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const { setUser, setWithToken } = useContext(AuthContext);

  const theme = useTheme();
  const navigate = useNavigate();

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSubmit = async (data) => {
    try {
      const response = await login(data.username, data.password, setUser);

      if (response && response.status === 200) {
        setUser();

        if (localStorage.getItem("token")) {
          setWithToken(true);
        }

        setTimeout(() => {
          navigate(response.data.data.role === "admin" ? "/admin" : "/");
        }, 0);

        toast.success("Login exitoso!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Login fallido...");
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Container
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: theme.palette.primary.main, fontSize: "2.5rem" }}>
          Login
        </h1>
        <Input
          label="Nombre de usuario"
          style={{ width: "100%", marginBlock: "25px" }}
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />

        <Input
          label="Contraseña"
          style={{ width: "100%", marginBlock: "25px" }}
          isPassword
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <Buttons
          variant="contained"
          texto="Iniciar Sesion"
          onClick={() => handleSubmit({ username, password })}
        />
        <Typography
          component="a"
          onClick={handleOpenModal}
          sx={{
            cursor: "pointer",
            mt: "15px",
            color: theme.palette.primary.main,
            fontSize: "10px",
          }}
        >
          Olvidé mi contraseña
        </Typography>
        <Modal open={openModal} handleClose={handleCloseModal} />
        <Divider
          sx={{
            height: "1px",
            backgroundColor: theme.palette.primary.main,
            width: "100%",
            marginBlock: "25px",
          }}
        />

        <Buttons
          variant="contained"
          texto="Crear Cuenta"
          onClick={() => navigate("/registro")}
        />
      </Container>
    </Box>
  );
};