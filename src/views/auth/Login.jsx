import { useState, useContext } from "react";
import { login } from "../../api/auth";
import { AuthContext } from "../../context/AuthContext";
import { Box, Container, Divider, Typography } from "@mui/material";
import { Input } from "../../components/Inputs/Input";
import { CustomButton } from "../../components/CustomButton";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../components/Modals/Modal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  username: yup
    .string("Ingresa tu nombre de usuario")
    .required("El nombre de usuario es requerido"),
  password: yup
    .string("Ingresa tu contraseña")
    .required("La contraseña es requerida"),
});

export const Login = () => {
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

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const decodedToken = await login(
          values.username,
          values.password,
          setUser
        );

        if (!decodedToken) {
          return toast.error("Login fallido...");
        }

        toast.success("Login exitoso!");
        setWithToken(true);

        const navigateTo =
          decodedToken.role === "admin" ? "/admin" : "/profile";
        setTimeout(() => navigate(navigateTo), 100);
      } catch (error) {
        console.error(error);
        toast.error("Login fallido...");
      }
    },
  });

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
        <form
          onSubmit={formik.handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%"
          }}
        >
          <Input
            label="Nombre de usuario"
            name="username"
            style={{ width: "100%", marginBlock: "25px" }}
            onChange={formik.handleChange}
            value={formik.values.username}
          />

          <Input
            label="Contraseña"
            name="password"
            isPassword
            style={{ width: "100%", marginBlock: "25px" }}
            onChange={formik.handleChange}
            value={formik.values.password}
          />

          <CustomButton
            variant="contained"
            texto="Iniciar Sesion"
            type="submit"
          />
        </form>
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

        <CustomButton
          variant="contained"
          texto="Crear Cuenta"
          onClick={() => navigate("/registro")}
        />
      </Container>
    </Box>
  );
};
