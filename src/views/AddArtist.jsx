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
  Avatar,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ArtistContext from "../context/ArtistContext";
import { useTheme } from "@emotion/react";
import { CustomButton } from "../components/UI/CustomButton";
import { ArtistModal } from "../components/UI/ArtistModal";
import { getSocialIcon } from "../helpers/utils";
import { DrawerFormArtist } from "../components/UI/DrawerFormArtist";

export const AddArtist = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [artists, setArtists] = useContext(ArtistContext);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingArtist, setEditingArtist] = useState(null);

  const theme = useTheme();

  const mainContentStyle = {
    width: isDrawerOpen ? '65%' : '100%',
    marginLeft: isDrawerOpen ? '35%' : '0'
  };

  const handleOpenDrawer = () => {
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
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
          width: mainContentStyle.width,
          marginLeft: mainContentStyle.marginLeft,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: theme.spacing(2),
        }}
      >

        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
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
              
              <CustomButton
                variant="contained"
                texto="Agregar Artista"
                onClick={handleOpenDrawer}
                style={{ marginBottom: theme.spacing(2) }} 
              />
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
                      <TableCell>
                        <Avatar
                          src={artist.imageUrl}
                          alt={artist.name}
                          sx={{ width: 90, height: 90 }}
                        />
                      </TableCell>
                      <TableCell>{artist.genres.join(", ")}</TableCell>
                      <TableCell>
                        {Object.keys(artist.socials).map((social) =>
                          getSocialIcon(social, artist.socials[social])
                        )}
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

     
      <DrawerFormArtist open={isDrawerOpen} onClose={handleCloseDrawer} BackdropProps={{ invisible: true }}  ModalProps={{ disableEnforceFocus: true }} />

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
          <CustomButton
            variant="contained"
            texto="Sí"
            onClick={confirmDelete}
          />
        </DialogActions>
      </Dialog>
    </>
  );
};
