import { Avatar, Typography, Box, Paper, Divider } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { AuthContext } from "../context/AuthContext";
import { useContext } from 'react';

export const PerfilUsuario = () => {
  const { user } = useContext(AuthContext);
  
  if (!user || !user.userName) {
    return <Typography>No hay datos de usuario disponibles</Typography>;
  }

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
      </Paper>
    </Box>
  );
};