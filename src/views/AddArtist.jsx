import { useContext, useState } from "react";
import { Container, Box, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ArtistContext from "../context/ArtistContext";
import { useTheme } from "@emotion/react";
import { Input } from "../components/UI/Input";
import { Buttons } from "../components/UI/Buttons";

export const AddArtist = () => {
  const [artists, setArtists] = useContext(ArtistContext);
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [genres, setGenres] = useState("");
  const [socials, setSocials] = useState({});
  const theme = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newArtist = {
      id: artists.length + 1,
      name,
      imageUrl,
      genres: genres.split(", "), 
      socials: socials.split(", "), 
    };

    setArtists([...artists, newArtist]);
    setName("");
    setImageUrl("");
    setGenres("");
    setSocials("");
  };

  const handleEdit = (artist) => {
    // Lógica para editar el artista
  };

  const handleDelete = (id) => {
    // Lógica para eliminar el artista
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
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Container
            maxWidth="xs"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                color: theme.palette.primary.main,
                fontSize: "2.5rem",
              }}
            >
              Agregar Artista
            </h1>
            <form onSubmit={handleSubmit}>
              <Input
                label="Nombre del Artista"
                style={{ width: "100%", marginBlock: "25px" }}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                label="URL de la imagen"
                style={{ width: "100%", marginBlock: "25px" }}
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
              <Input
                label="Géneros (separados por coma)"
                style={{ width: "100%", marginBlock: "25px" }}
                value={genres}
                onChange={(e) => setGenres(e.target.value)}
              />
              <Input
                label="Redes sociales (separados por coma)"
                style={{ width: "100%", marginBlock: "25px" }}
                value={socials}
                onChange={(e) => setSocials(e.target.value)}
              />
              <Buttons variant="contained" texto="AGREGAR" />
            </form>
          </Container>
        </Grid>
        <Grid item xs={6}>
          <h2>Listado de artistas existentes</h2>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Nombre del Artista</TableCell>
                  <TableCell>URL de la imagen</TableCell>
                  <TableCell>Géneros</TableCell>
                  <TableCell>Redes sociales</TableCell>
                  <TableCell>Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {artists.map((artist) => (
                  <TableRow key={artist.id}>
                    <TableCell>{artist.name}</TableCell>
                    <TableCell>{artist.imageUrl}</TableCell>
                    <TableCell>{artist.genres.join(", ")}</TableCell>
                    {/* <TableCell>{artist.socials.join(", ")}</TableCell> */}
                    <TableCell>
                      <IconButton onClick={() => handleEdit(artist)}>
                        <EditIcon />
                      </IconButton>
                      <IconButton onClick={() => handleDelete(artist.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  );
};
