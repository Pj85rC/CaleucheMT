import { useContext } from "react";
import { FestivalContext } from "../context/FestivalContext";
import { Box, Container } from "@mui/material";
import { FestivalCard } from "../components/UI/FestivalCard";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Festivales = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { festivals } = useContext(FestivalContext);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
        <h1
          style={{
            color: theme.palette.primary.main,
            fontSize: "2.5rem",
            textAlign: "center",
          }}
        >
          Festivales
        </h1>
        {festivals.length > 0 ? (
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
            {festivals.map((festival, i) => (
              <div key={i} style={{ margin: "0 15px" }}>
                <FestivalCard
                  title={festival.name}
                  imageUrl={festival.photoURL}
                  description={festival.description}
                  onDetailClick={() => navigate(`/festival/${festival.id}`)}
                />
              </div>
            ))}
          </Carousel>
        ) : (
          <h2>No hay festivales</h2>
        )}
      </Container>
    </Box>
  );
};
