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
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Input label="Nombre de Usuario" style={{ width: "100%" }} />
          </Grid>
          <Grid item xs={12}>
            <Input label="Contraseña" style={{ width: "100%" }} isPassword />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Grid item xs={12} sx={{ marginBlock: "25px" }}>
              <Buttons variant="contained" texto="Iniciar Sesion" />
            </Grid>
            <Divider
              sx={{
                height: "1px",
                width: "100%",
                borderColor: theme.palette.primary.main,
              }}
            />
            <Grid item xs={12} sx={{ marginBlock: "25px" }}>
              <Buttons variant="contained" texto="Crear Cuenta" />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
