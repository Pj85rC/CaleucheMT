import { useTheme } from "@emotion/react";
import { Box, Container, useMediaQuery } from "@mui/material";

export const Home = () => {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const navbarHeight = matches ? "90px" : "70px";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundImage:
          "url( https://abismoblogzine.com/data/media/2019/05/Hellfest-2018_Festival-Site-HF18-1674.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%",
        alignItems: "center",
        pt: navbarHeight,
      }}
    >
      <Container maxWidth="xl">
        <h1
          style={{
            color: theme.palette.primary.main,
            fontSize: "2.5rem",
            textAlign: "center",
            marginTop: "2rem",
          }}
        >
          Bienvenidos a Caleuche Metal Tours
        </h1>
      </Container>
    </Box>
  );
};
