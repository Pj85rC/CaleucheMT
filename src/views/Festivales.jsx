import { Container, Grid } from "@mui/material";
import { FestivalCard } from "../components/UI/FestivalCard";

export const Festivales = () => {
  const festivalData = [
    {
      title: "W:O:A",
      imageUrl:
        "https://metaltower.net/wp-content/uploads/2022/08/wacken-open-air-iron-maiden.jpeg",
      description:
        "Descripción festival Lorem ipsum dolor sit amet, At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
      lineup:
        "Lista de Artistas Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Hellfest",
      imageUrl:
        "https://api-cdn.arte.tv/img/v2/image/4PYkUCvewwhR6iYTyb84xL/1920x1080?type=TEXT",
      description:
        "Descripción festival Lorem ipsum dolor sit amet, At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
      lineup:
        "Lista de Artistas Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "BRUTAL ASSAULT",
      imageUrl:
        "https://cdn-az.allevents.in/events9/banners/5fa8f1948b8845ac68f85b99723f45934c4be3b57bd93fd434fbd9ccda3f3117-rimg-w960-h639-gmir.jpg?v=1687960213",
      description:
        "Descripción festival Lorem ipsum dolor sit amet, At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
      lineup:
        "Lista de Artistas Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  return (
    <>
      <h1>Festivales</h1>
      <Container maxWidth="xl">
        <Grid container spacing={3} justifyContent="center">
          {festivalData.map((festival, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <FestivalCard
                title={festival.title}
                imageUrl={festival.imageUrl}
                description={festival.description}
                lineup={festival.lineup}
                // onDetailClick={}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
