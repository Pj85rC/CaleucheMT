import { Box, Container, Divider } from "@mui/material";
import { Input } from "../components/UI/Input";
import { Buttons } from "../components/UI/Buttons";
import { useTheme } from "@emotion/react";

export const Registro = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100vw",
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
        <Input
          label="Nombre de Usuario"
          style={{ width: "100%", marginBlock: "25px" }}
        />
        <Input
          label="Correo Electrónico"
          style={{ width: "100%", marginBlock: "25px" }}
        />

        <Input
          label="Contraseña"
          style={{ width: "100%", marginBlock: "25px" }}
          isPassword
        />
        <Input
          label="Repetir Contraseña"
          style={{ width: "100%", marginBlock: "25px" }}
          isPassword
        />

        <Buttons variant="contained" texto="FINALIZAR" />
      </Container>
    </Box>
  );
};
