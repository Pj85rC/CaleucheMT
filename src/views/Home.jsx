import { useTheme } from "@emotion/react";
import { Box, Container } from "@mui/material";

export const Home = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        backgroundImage: "url( https://abismoblogzine.com/data/media/2019/05/Hellfest-2018_Festival-Site-HF18-1674.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // minHeight: "100vh",
        wrap: "wrap",
      }}
    >
      <Container maxWidth="xl">
        <h1
          style={{
            color: theme.palette.primary.main,
            fontSize: "2.5rem",
            textAlign: "center",
          }}
        >
          Bienvenidos a Caleuche Metal Tours
        </h1>
      </Container>
     
    </Box>
  );
};
