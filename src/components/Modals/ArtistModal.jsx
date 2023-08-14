import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Chip,
  useTheme
} from "@mui/material";
import { useContext, useEffect } from "react";
import { CustomButton } from "../CustomButton";
import ArtistContext from "../../context/ArtistContext";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UpdateArtist } from "../../api/artists";

const validationSchema = yup.object({
  name: yup.string().required("Nombre es requerido"),
  imageUrl: yup
    .string()
    .url("Debe ser una URL válida")
    .required("URL de imagen es requerida"),
  website: yup.string().url("Debe ser una URL válida"),
  facebook: yup.string().url("Debe ser una URL válida"),
  twitter: yup.string().url("Debe ser una URL válida"),
  instagram: yup.string().url("Debe ser una URL válida"),
  genres: yup.array().required("Géneros son requeridos"),
});

export const ArtistModal = ({ open, artist, onClose, onSave }) => {
  const [artists, setArtists] = useContext(ArtistContext);
  const theme = useTheme();

  const getLink = (platform) => {
    const linkObj = artist?.links.find((link) => link.platform === platform);
    return linkObj ? linkObj.url : "";
  };

  const initialValues = {
    name: artist?.name || "",
    imageUrl: artist?.photo_url || "",
    genres: artist?.genres || [],
    website: getLink("website"),
    facebook: getLink("facebook"),
    twitter: getLink("twitter"),
    instagram: getLink("instagram"),
  };

  console.log("artist object:", artist);
  console.log("initialValues:", initialValues);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      console.log("onSubmit triggered with values:", values);

      try {
        const artistIndex = artists.findIndex((a) => a.id === artist.id);
        if (artistIndex !== -1) {
          // Prepare the data according to the expected format in the backend
          const updatedArtist = {
            name: values.name,
            photo_url: values.imageUrl,
            genres: values.genres,
            links: [
              { platform: "website", url: values.website },
              { platform: "facebook", url: values.facebook },
              { platform: "twitter", url: values.twitter },
              { platform: "instagram", url: values.instagram },
            ],
          };

          // Call the UpdateArtist function to update the artist in the backend
          const response = await UpdateArtist(artist.id, updatedArtist);

          // Update the local state with the new artist's information
          const updatedArtists = [...artists];
          updatedArtists[artistIndex] = { ...artist, ...updatedArtist };
          setArtists(updatedArtists);

          // Call any additional handlers and close the modal
          onSave(values);
          onClose();

          toast.success("Artista actualizado con éxito!");
        } else {
          toast.error("El artista no fue encontrado.");
        }
      } catch (error) {
        console.error(error);
        toast.error("Ocurrió un error al actualizar el artista.");
      }
    },
  });

  useEffect(() => {
    formik.resetForm({ values: initialValues });
  }, [artist]);

  const handleAddGenre = (genre) => {
    formik.values.genres.includes(genre)
      ? toast.error("El género ya existe.")
      : formik.setFieldValue("genres", [...formik.values.genres, genre]);
  };

  const handleDeleteGenre = (genreToDelete) => {
    formik.setFieldValue(
      "genres",
      formik.values.genres.filter((genre) => genre !== genreToDelete)
    );
  };

  console.log("Current Formik values:", formik.values);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Editar Artista</DialogTitle>
        <DialogContent>
          <TextField
            label="Nombre"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            fullWidth
            margin="normal"
            inputProps={{ style: { color: theme.palette.text.primary } }}
          />
          <TextField
            label="URL de Imagen"
            name="imageUrl"
            value={formik.values.imageUrl}
            onChange={formik.handleChange}
            fullWidth
            margin="normal"
            inputProps={{ style: { color: theme.palette.text.primary } }}
          />
          <TextField
            label="Website"
            name="website"
            value={formik.values.website}
            onChange={formik.handleChange}
            fullWidth
            margin="normal"
            inputProps={{ style: { color: theme.palette.text.primary } }}
          />
          <TextField
            label="Facebook"
            name="facebook"
            value={formik.values.facebook}
            onChange={formik.handleChange}
            fullWidth
            margin="normal"
            inputProps={{ style: { color: theme.palette.text.primary } }}
          />
          <TextField
            label="Twitter"
            name="twitter"
            value={formik.values.twitter}
            onChange={formik.handleChange}
            fullWidth
            margin="normal"
            inputProps={{ style: { color: theme.palette.text.primary } }}
          />
          <TextField
            label="Instagram"
            name="instagram"
            value={formik.values.instagram}
            onChange={formik.handleChange}
            fullWidth
            margin="normal"
            inputProps={{ style: { color: theme.palette.text.primary } }}
          />
          <div style={{ margin: "10px 0" }}>
            <strong>Géneros</strong>
            {formik.values.genres.map((genre, index) => (
              <Chip
                key={index}
                label={genre}
                onDelete={() => handleDeleteGenre(genre)}
                style={{ margin: "5px" }}
              />
            ))}
          </div>
          <TextField
            label="Agregar Género"
            fullWidth
            margin="normal"
            inputProps={{ style: { color: theme.palette.background.default } }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && e.target.value) {
                handleAddGenre(e.target.value);
                e.target.value = "";
              }
            }}
          />
        </DialogContent>
        <DialogActions>
          <CustomButton
            variant="contained"
            onClick={onClose}
            texto="Cancelar"
          />
          <CustomButton variant="contained" type="submit" texto="Guardar" />
        </DialogActions>
      </Dialog>
    </form>
  );
};
