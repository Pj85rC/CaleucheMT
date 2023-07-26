import { useContext } from 'react';
import FestivalContext from '../context/FestivalContext';
import { Box, Container, Grid } from "@mui/material";
import { FestivalCard } from "../components/UI/FestivalCard";
import { useTheme } from "@emotion/react";


export const Festivales = () => {
  const theme = useTheme();
  const festivals = useContext(FestivalContext);
  /* const [loading, setLoading] = useState(false); */

  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        wrap: "wrap",
      }}
    >
      <Container maxWidth="xl">
        <h1 style={{ color: theme.palette.primary.main, fontSize: "2.5rem", textAlign:'center'}}>Festivales</h1>
        { festivals.length > 0 ? (
            <Grid container spacing={3} justifyContent="center">
              {festivals.map((festival, i) => (
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
          ) : (
            <h2>No hay festivales</h2>
          )
        }
      </Container>
    </Box>
  );
};
