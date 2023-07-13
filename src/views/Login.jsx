import { Box, Container, Divider, Grid } from "@mui/material";
import { Input } from "../components/UI/Input";
import { Buttons } from "../components/UI/Buttons";
import { useTheme } from "@emotion/react";

export const Login = () => {
  const theme = useTheme();
  return (
    <Box
      maxWidth="xs"
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: "white" }}>Login</h1>
        <Input
          label="Nombre de Usuario"
          style={{ width: "100%", marginBlock: "25px" }}
        />
        <Input
          label="Contraseña"
          style={{ width: "100%", marginBottom: "25px" }}
          isPassword
        />
        <Buttons variant="contained" texto="Iniciar Sesion" />
        <Divider
          sx={{
            height: "1px",
            width: "100%",
            borderColor: theme.palette.primary.main,
            marginBlock: "25px",
          }}
        />
        <Buttons variant="contained" texto="Crear Cuenta" />
      </Container>
    </Box>
  );
};
