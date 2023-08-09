import { useContext, useState } from "react";
import {
  Container,
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Dialog,
  DialogTitle,
  DialogActions,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ArtistContext from "../context/ArtistContext";
import { useTheme } from "@emotion/react";
import { Input } from "../components/UI/Input";
import { CustomButton } from "../components/UI/CustomButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import WebIcon from "@mui/icons-material/Web";
import { ArtistModal } from "../components/UI/ArtistModal";

export const AddArtist = () => {
  const [artists, setArtists] = useContext(ArtistContext);
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [genres, setGenres] = useState("");
  const [socials, setSocials] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingArtist, setEditingArtist] = useState(null);

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

  const startEditing = (artist) => {
    setEditingArtist(artist);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setEditingArtist(null);
  };

  const handleSaveEditedArtist = (updatedArtistData) => {
    const updatedArtist = {
      ...editingArtist,
      ...updatedArtistData,
    };

    setArtists(
      artists.map((a) => (a.id === updatedArtist.id ? updatedArtist : a))
    );
    handleModalClose();
  };

  const getSocialIcon = (network) => {
    switch (network) {
      case "Facebook":
        return <FacebookIcon />;
      case "Twitter":
        return <TwitterIcon />;
      case "Instagram":
        return <InstagramIcon />;
      case "Web":
        return <WebIcon />;
      default:
        return null;
    }
  };

  const showDeleteDialog = (id) => {
    setSelectedId(id);
    setDialogOpen(true);
  };

  const confirmDelete = () => {
    setArtists(artists.filter((artist) => artist.id !== selectedId));
    setDialogOpen(false);
    setSelectedId(null);
  };

  return (
    <>
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
                <CustomButton variant="contained" texto="AGREGAR" />
              </form>
            </Container>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              "& .MuiTableCell-root": { color: theme.palette.primary.main },
            }}
          >
            <h2
              style={{
                color: theme.palette.primary.main,
                fontSize: "1.5rem",
                textAlign: "center",
              }}
            >
              Listado de artistas existentes
            </h2>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ARTISTA</TableCell>
                    <TableCell>URL IMG</TableCell>
                    <TableCell>GÉNEROS</TableCell>
                    <TableCell>RRSS</TableCell>
                    <TableCell>ACCIÓN</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {artists.map((artist) => (
                    <TableRow key={artist.id}>
                      <TableCell>{artist.name}</TableCell>
                      <TableCell>{artist.imageUrl}</TableCell>
                      <TableCell>{artist.genres.join(", ")}</TableCell>
                      <TableCell>
                        {console.log(
                          "mostrando las rrss de los artistas: ",
                          artist.socials
                        )}
                        {Array.isArray(artist.socials) &&
                          artist.socials.map((network) => (
                            <IconButton
                              key={network}
                              onClick={() => window.open(network, "_blank")}
                            >
                              {getSocialIcon(network)}
                            </IconButton>
                          ))}
                      </TableCell>
                      <TableCell>
                        <IconButton onClick={() => startEditing(artist)}>
                          <EditIcon
                            style={{ color: theme.palette.primary.main }}
                          />
                        </IconButton>
                        <IconButton onClick={() => showDeleteDialog(artist.id)}>
                          <DeleteIcon
                            style={{ color: theme.palette.primary.main }}
                          />
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

      <ArtistModal
        open={isModalOpen}
        artist={editingArtist}
        onClose={handleModalClose}
        onSave={handleSaveEditedArtist}
      />

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>¿Deseas eliminar este artista?</DialogTitle>
        <DialogActions>
          <CustomButton
            variant="contained"
            texto="No"
            onClick={() => setDialogOpen(false)}
          />
          <CustomButton variant="contained" texto="Sí" onClick={confirmDelete} />
        </DialogActions>
      </Dialog>
    </>
  );
};
