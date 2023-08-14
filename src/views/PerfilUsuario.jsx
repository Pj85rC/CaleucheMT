import { Avatar, Typography, Box, Paper, Divider } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

export const PerfilUsuario = () => {
  // Datos simulados, eventualmente reemplazarías esto con datos de tu endpoint
  const userData = {
    avatar: null, // Puedes poner aquí una URL si tienes un avatar por defecto
    username: 'Juanito92',
    email: 'juanito92@email.com',
    rol: 'Administrador'
  };

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
            src={userData.avatar}
            alt={userData.username}
          >
            {/* Si no hay una imagen de avatar, muestra un ícono de usuario */}
            {!userData.avatar && <AccountCircle style={{ fontSize: 80 }} />}
          </Avatar>
          <Typography variant="h4" style={{ marginTop: 20 }}>
            ¡Bienvenido, {userData.username}!
          </Typography>
        </Box>

        <Divider style={{ margin: '20px 0' }} />

        <Box mt={2}>
          <Typography variant="h6">Correo electrónico:</Typography>
          <Typography variant="body1">{userData.email}</Typography>
        </Box>

        <Box mt={2}>
          <Typography variant="h6">Rol:</Typography>
          <Typography variant="body1">{userData.rol}</Typography>
        </Box>
      </Paper>
    </Box>
  );
};