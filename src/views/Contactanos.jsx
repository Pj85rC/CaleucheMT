import { Box, Container, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import { useTheme } from "@emotion/react";

export const Contact = () => {
  const theme = useTheme();

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
          CONTÁCTANOS
        </h1>
        <Typography align="center" paragraph color={theme.palette.primary.main}>
          Para cualquier consulta, no dudes en contactarnos a través de los
          siguientes medios:
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", my: 2 }}>
          <PhoneIcon color="primary" />
          <Typography
            variant="body1"
            color={theme.palette.primary.main}
            sx={{ ml: 1 }}
          >
            +123 456 7890
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", my: 2 }}>
          <WhatsAppIcon color="primary" />
          <Typography
            variant="body1"
            color={theme.palette.primary.main}
            sx={{ ml: 1 }}
          >
            +123 456 7890
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", my: 2 }}>
          <EmailIcon color="primary" />
          <Typography
            variant="body1"
            color={theme.palette.primary.main}
            sx={{ ml: 1 }}
          >
            example@example.com
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
