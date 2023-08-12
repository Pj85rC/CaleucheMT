import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Container } from "@mui/material";
import { Input } from "../../components/Input";
import { CustomButton } from "../../components/CustomButton";
import { useTheme } from "@emotion/react";
import { register } from "../../api/auth";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const validationSchema = Yup.object({
  username: Yup.string().required("Nombre de usuario es requerido"),
  email: Yup.string()
    .email("Correo electrónico inválido")
    .required("Correo electrónico es requerido"),
  password: Yup.string().required("Contraseña es requerida"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Las contraseñas deben coincidir")
    .required("Repetir contraseña es requerido"),
});

export const Registro = () => {
  const { setUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const theme = useTheme();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        await register(values.username, values.email, values.password, setUser);
        toast.success("Registro exitoso!");
        navigate("/profile");
      } catch (error) {
        toast.error(
          "Hubo un error en el registro. Por favor, inténtelo de nuevo."
        );
        console.error(error);
      } finally {
        setSubmitting(false);
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
          Registro
        </h1>
        <form onSubmit={formik.handleSubmit}>
          <Input
            label="Nombre de Usuario"
            name="username"
            onChange={formik.handleChange}
            value={formik.values.username}
            style={{ width: "100%", marginBlock: "25px" }}
          />
          <Input
            label="Correo Electrónico"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            style={{ width: "100%", marginBlock: "25px" }}
          />
          <Input
            label="Contraseña"
            name="password"
            isPassword
            onChange={formik.handleChange}
            value={formik.values.password}
            style={{ width: "100%", marginBlock: "25px" }}
          />
          <Input
            label="Repetir Contraseña"
            name="confirmPassword"
            isPassword
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
            style={{ width: "100%", marginBlock: "25px" }}
          />

          <CustomButton variant="contained" texto="FINALIZAR" type="submit" />
        </form>
      </Container>
    </Box>
  );
};
