import { useContext } from 'react';
import { Avatar, Typography, Box, Paper, Divider, Grid } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { AuthContext } from "../context/AuthContext";
import { FavoritesContext } from "../context/FavContext";
import { FestivalContext } from "../context/FestivalContext";
import { FestivalCard } from "../components/Cards/FestivalCard";

export const PerfilUsuario = () => {
  const { user } = useContext(AuthContext);
  const { favorites } = useContext(FavoritesContext);
  const { festivals } = useContext(FestivalContext);

  
  if (!user || !user.userName) {
    return <Typography>No hay datos de usuario disponibles</Typography>;
  }

  const favoriteFestivals = festivals.filter(festival => favorites.includes(festival.id));

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      mt={8}
      p={3}
    >
      <Paper elevation={3} style={{ width: '80%', padding: '20px' }}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Avatar
            style={{ width: 80, height: 80 }}
            alt={user.userName}
          >
            <AccountCircle style={{ fontSize: 80 }} />
          </Avatar>
          <Typography variant="h4" style={{ marginTop: 20 }}>
            ¡Bienvenido, {user.userName}!
          </Typography>
        </Box>

        <Divider style={{ margin: '20px 0' }} />

        <Box mt={2}>
          <Typography variant="h6">Correo electrónico:</Typography>
          <Typography variant="body1">{user.email}</Typography>
        </Box>

        <Box mt={2}>
          <Typography variant="h6">Rol:</Typography>
          <Typography variant="body1">{user.role}</Typography>
        </Box>
        {favorites && favorites.length > 0 && (
          <>
            <Divider style={{ margin: '20px 0' }} />
            <Typography variant="h5" sx={{ marginTop: 3 }}>
              Tus festivales favoritos:
            </Typography>
            <Grid container spacing={3}>
              {favorites.map((festival) => (
                <Grid item xs={12} sm={6} md={4} key={festival.id}>
                  <FestivalCard
                    id={festival.id}
                    title={festival.title}
                    imageUrl={festival.imageUrl}
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