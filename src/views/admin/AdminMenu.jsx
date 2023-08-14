import { Box, Container } from "@mui/material";
import { useTheme } from "@emotion/react";
import { CustomButton } from "../../components/CustomButton";
import { useNavigate } from "react-router-dom";

export const AdminMenu = () => {
  const theme = useTheme();
  const navigate = useNavigate();

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
          Administración
        </h1>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            justifyContent: "center",
            gap: theme.spacing(2),
          }}
        >
          <CustomButton
            texto="Administrar Artistas"
            variant="contained"
            onClick={() => navigate(`/admin/artists`)}
          />
          <CustomButton
            texto="Administrar Festivales"
            variant="outlined"
            onClick={() => navigate(`/admin/festivals`)}
          />
        </Box>
      </Container>
    </Box>
  );
};
