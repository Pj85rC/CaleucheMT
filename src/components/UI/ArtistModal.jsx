import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Chip,
  useTheme
} from "@mui/material";
import { useState, useContext, useEffect } from "react";
import { CustomButton } from "./CustomButton";
import ArtistContext from "../../context/ArtistContext";

export const ArtistModal = ({ open, artist, onClose, onSave }) => {
  const [artists, setArtists] = useContext(ArtistContext);
  const theme = useTheme();

  const styles = {
    dialogContent: {
      '& .MuiInputBase-input': {
        color: theme.palette.background.default,
      },
    },
  };

  const [localArtist, setLocalArtist] = useState({
    name: artist?.name || "",
    imageUrl: artist?.imageUrl || "",
    genres: artist?.genres || [],
    socials: artist?.socials || {},
  });

  useEffect(() => {
    setLocalArtist({
      name: artist?.name || "",
      imageUrl: artist?.imageUrl || "",
      genres: artist?.genres || [],
      socials: artist?.socials || {},
    });
  }, [artist]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalArtist((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Encuentra el índice del artista en la lista global.
    const artistIndex = artists.findIndex((a) => a.id === artist.id);

    if (artistIndex !== -1) {
      // Si el artista se encuentra, actualiza su información en la lista global.
      const updatedArtists = [...artists];
      updatedArtists[artistIndex] = localArtist;

      setArtists(updatedArtists);
    }

    onSave(localArtist);
    onClose();
  };

  const handleInputChangeForSocials = (e) => {
    const { name, value } = e.target;
    setLocalArtist((prev) => ({
      ...prev,
      socials: {
        ...prev.socials,
        [name]: value,
      },
    }));
  };

  const handleAddGenre = (genre) => {
    localArtist.genres.includes(genre) 
      ? console.error('El género ya existe.')  
      : setLocalArtist(prev => ({
          ...prev,
          genres: [...prev.genres, genre]
        }));
  };
  
  const handleDeleteGenre = (genreToDelete) => {
    setLocalArtist(prev => ({
      ...prev,
      genres: prev.genres.filter(genre => genre !== genreToDelete)
    }));
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
          margin="normal"
          inputProps={{ style: { color: theme.palette.background.default } }}
        />
        <TextField
          label="URL de Imagen"
          name="imageUrl"
          value={localArtist.imageUrl}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          inputProps={{ style: { color: theme.palette.background.default } }}
        />
        <TextField
          label="Website"
          name="website"
          value={localArtist.socials.website}
          onChange={handleInputChangeForSocials}
          fullWidth
          margin="normal"
          inputProps={{ style: { color: theme.palette.background.default } }}
        />
        <TextField
          label="Instagram"
          name="instagram"
          value={localArtist.socials.instagram}
          onChange={handleInputChangeForSocials}
          fullWidth
          margin="normal"
          inputProps={{ style: { color: theme.palette.background.default } }}
        />
        <TextField
          label="Facebook"
          name="facebook"
          value={localArtist.socials.facebook}
          onChange={handleInputChangeForSocials}
          fullWidth
          margin="normal"
          inputProps={{ style: { color: theme.palette.background.default } }}
        />
        <TextField
          label="Twitter"
          name="twitter"
          value={localArtist.socials.twitter}
          onChange={handleInputChangeForSocials}
          fullWidth
          margin="normal"
          inputProps={{ style: { color: theme.palette.background.default } }}
        />
        <div style={{ margin: '10px 0' }}>
        <strong>Géneros</strong>
        {localArtist.genres.map(genre => (
          <Chip
            key={genre}
            label={genre}
            onDelete={() => handleDeleteGenre(genre)}
            style={{ margin: '5px' }}
          />
        ))}
      </div>

      <TextField
        label="Agregar Género"
        fullWidth
        margin="normal"
        inputProps={{ style: { color: theme.palette.background.default } }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && e.target.value) {
            handleAddGenre(e.target.value);
            e.target.value = '';  // limpiar el campo de texto
          }
        }}
      />
      </DialogContent>
      <DialogActions>
        <CustomButton variant="contained" onClick={onClose} texto="Cancelar" />
        <CustomButton
          variant="contained"
          onClick={handleSave}
          texto="Guardar"
        />
      </DialogActions>
    </Dialog>
  );
};
