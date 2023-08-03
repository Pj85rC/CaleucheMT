import { useState } from "react";
import { Box, Container, Divider, Typography } from "@mui/material";
import { Input } from "../components/UI/Input";
import { Buttons } from "../components/UI/Buttons";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { Modal } from "../components/UI/Modal";

export const Login = () => {
  const [openModal, setOpenModal] = useState(false);

  const theme = useTheme();
  const navigate = useNavigate();

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
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
          label="Nombre de Usuario"
          style={{ width: "100%", marginBlock: "25px" }}
        />

        <Input
          label="Contraseña"
          style={{ width: "100%", marginBlock: "25px" }}
          isPassword
        />

        <Buttons variant="contained" texto="Iniciar Sesion" />
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
