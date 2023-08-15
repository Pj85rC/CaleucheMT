import { useContext } from "react";
import { Avatar, Typography, Box, Paper, Divider, Grid } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { AuthContext } from "../context/AuthContext";
import { FavoritesContext } from "../context/FavContext";
import { FestivalContext } from "../context/FestivalContext";
import { FestivalCard } from "../components/Cards/FestivalCard";
import { useTheme } from "@emotion/react";

export const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const { favorites } = useContext(FavoritesContext);
  const { festivals } = useContext(FestivalContext);
  const theme = useTheme();

  if (!user || !user.userName) {
    return (
      <Typography
        style={{
          color: theme.palette.primary.main,
          fontSize: "2.5rem",
          textAlign: "center",
        }}
      >
        No hay datos de usuario disponibles
      </Typography>
    );
  }

  const favoriteFestivalIds = favorites.map((fav) => fav.festival_id);
  const favoriteFestivals = festivals.filter((festival) =>
    favoriteFestivalIds.includes(festival.id)
  );

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      mt={8}
      p={3}
    >
      <Paper
        elevation={3}
        style={{ width: "80%", padding: "20px", background: "transparent" }}
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          <Avatar style={{ width: 80, height: 80 }} alt={user.userName}>
            <AccountCircle style={{ fontSize: 80 }} />
          </Avatar>
          <Typography
            variant="h4"
            style={{ marginTop: 20, color: theme.palette.primary.main }}
          >
            ¡Bienvenido, {user.userName}!
          </Typography>
        </Box>

        <Divider style={{ margin: "20px 0" }} />

        <Box mt={2}>
          <Typography variant="h6" color="white">
            Correo electrónico:
          </Typography>
          <Typography variant="body1" color="white">
            {user.email}
          </Typography>
        </Box>

        <Box mt={2}>
          <Typography variant="h6" color="white">
            Rol:
          </Typography>
          <Typography variant="body1" color="white">
            {user.role}
          </Typography>
        </Box>
        {favorites && favorites.length > 0 && (
          <>
            <Divider style={{ margin: "20px 0" }} />
            <Typography variant="h5" color="white" sx={{ marginTop: 3 }}>
              Tus festivales favoritos:
            </Typography>
            <Grid container spacing={3}>
              {favoriteFestivals.map((festival) => (
                <Grid item xs={12} sm={6} md={4} key={festival.id}>
                  <FestivalCard
                    id={festival.id}
                    title={festival.name}
                    imageUrl={festival.photoURL}
                    description={festival.description}
                    onDetailClick={() => {}}
                  />
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </Paper>
    </Box>
  );
};
