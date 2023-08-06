import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FestivalContext } from "../context/FestivalContext";
import { GetFestivalLineup } from "../api/festivals";
import ArtistCard from "../components/UI/ArtistCard";
import { useTheme } from "@emotion/react";
import { Box, Container, Grid } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const DetalleFestivales = () => {
  const [lineup, setLineup] = useState([]);
  const theme = useTheme();
  let { id } = useParams();
  const { festivals } = useContext(FestivalContext);

  const festival = festivals.find((festival) => festival.id == id);

  console.log(lineup);

  useEffect(() => {
    const fetchLineup = async () => {
      const data = await GetFestivalLineup(id);
      setLineup(data);
    };

    fetchLineup();
  }, [id]);

  if (!festival) {
    return (
      <h1
        style={{
          color: theme.palette.primary.main,
          fontSize: "2.5rem",
          textAlign: "center",
        }}
      >
        Festival no encontrado
      </h1>
    );
  }

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

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
        <Grid container spacing={3}>
          <Grid item xs={12} sm={5}>
            <img
              src={festival.photoURL}
              alt={festival.title}
              style={{ width: "90%", height: "auto", margin: "2rem" }}
            />
          </Grid>
          <Grid item xs={12} sm={7}>
            <div
              style={{
                color: theme.palette.primary.main,
                fontSize: "14px",
                textAlign: "left",
                margin: "2.5rem",
              }}
            >
              <h1 style={{ fontSize: "2.5rem" }}>{festival.title}</h1>
              <h2>{festival.location}</h2>
              <h2>{new Date(festival.date).toLocaleDateString()}</h2>
              <p style={{ fontSize: "12px" }}>{festival.description}</p>
            </div>
          </Grid>
        </Grid>

        {lineup.length > 0 ? (
          <Carousel
            swipeable={false}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {lineup.map((artist, i) => (
              <ArtistCard artist={artist} key={i} />
            ))}
          </Carousel>
        ) : (
          <h2>No hay artistas para este festival</h2>
        )}
      </Container>
    </Box>
  );
};
