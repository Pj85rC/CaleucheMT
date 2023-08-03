import { Box, Container, Typography } from "@mui/material";
import Timeline from "../components/UI/timeline";
import timelineEvents from "../data/events.json";
import { useTheme } from "@emotion/react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

export const AboutUs = () => {
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
      <Container maxWidth="xl">
        <h1
          style={{
            color: theme.palette.primary.main,
            fontSize: "2.5rem",
            textAlign: "center",
          }}
        >
          Quienes Somos
        </h1>

        <Typography variant="h6" color="white" align="center" paragraph>
          Mentalizados en acercar el metal al cono sur y a los metalheads al
          viejo continente en búsqueda de una de las mejores experiencias de
          vida, creamos este proyecto intentando entregar confiabilidad y seguir
          apoyando a la escena del metal en latinoamérica.
        </Typography>
        <Timeline events={timelineEvents} />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: "40px",
          }}
        >
          <h1
            style={{
              color: theme.palette.primary.main,
              fontSize: "2.5rem",
              textAlign: "center",
            }}
          >
            Nuestros Metalheads
          </h1>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: "20px",
              width: "100%",
            }}
          >
            {[
              {
                name: "Patricio Ramírez",
                job: "Socio Caleuche Metal SpA",
                photo:
                  "https://imgix.ranker.com/list_img_v2/1469/101469/original/viking-metal-bands-and-musicians-u6",
              },
              {
                name: "Victor Celis",
                job: "Socio Caleuche Metal SpA",
                photo:
                  "https://media.themusic.com.au/images/standard/news-22/metal-lords/eddiemunson.990x660.jpg",
              },
            ].map((metalhead, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  mx: "50px",
                }}
              >
                <Box
                  sx={{
                    width: "300px",
                    height: "300px",
                    borderRadius: "50%",
                    backgroundImage: `url(${metalhead.photo})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    border: "2px solid",
                    borderColor: "#c3d0f2",
                    marginBottom: 2,
                  }}
                ></Box>
                <Typography variant="h6" color="white" sx={{ marginBottom: 1 }}>
                  {metalhead.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="white"
                  sx={{ fontSize: "12px", marginBottom: 1 }}
                >
                  {metalhead.job}
                </Typography>
                <Box sx={{ display: "flex" }}>
                  <a
                    href="https://www.instagram.com/username"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon color="primary" />
                  </a>
                  <a
                    href="https://twitter.com/username"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TwitterIcon color="primary" />
                  </a>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
