import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button
} from '@mui/material';
import { useState } from 'react';

export const ArtistModal = ({ 
  open, 
  artist, 
  onClose, 
  onSave 
}) => {
  const [localArtist, setLocalArtist] = useState({
    name: artist.name,
    genre: artist.genre,
    
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalArtist(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    onSave(localArtist);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Editar Artista</DialogTitle>
      <DialogContent>
        <TextField
          label="Nombre"
          name="name"
          value={localArtist.name}
          onChange={handleInputChange}
          fullWidth
        />
        {/* Agrega más campos según lo necesites */}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleSave} color="primary">
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
};


