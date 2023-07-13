import { Box, Container, Divider, Grid } from "@mui/material";
import { Input } from "../components/UI/Input";
import { Buttons } from "../components/UI/Buttons";
import { useTheme } from "@emotion/react";

export const Login = () => {
  const theme = useTheme();
  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          direction: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Login</h1>
        <Grid container spacing={3}>
          <Grid item >
            <Input label="Nombre de Usuario" />
          </Grid>
          <Grid item >
            <Input label="Contraseña" isPassword />
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <Buttons texto="Iniciar Sesion" style={{ width: "100%" }} />
          </Grid>
          <Divider
            style={{
              backgroundColor: theme.palette.primary.main,
              width: "100%",
            }}
          />
          <Grid item xs={12} sm={8} md={6}>
            <Buttons
              variant="contained"
              texto="Crear Cuenta"
              style={{ width: "100%" }}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
