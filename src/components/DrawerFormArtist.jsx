import { Drawer, Container, Grid, IconButton, useTheme } from "@mui/material";
import { CustomButton } from "./CustomButton";
import { CustomInput } from "../components/Inputs/CustomInput";
import DeleteIcon from "@mui/icons-material/Delete";
import { useFormik } from "formik";
import { CreateArtist } from "../api/artists";
import * as yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const DrawerFormArtist = ({ open, onClose, onArtistAdded }) => {
  const theme = useTheme();

  const initialValues = {
    name: "",
    imageUrl: "",
    genres: [""],
    socials: [{ platform: "", url: "" }],
  };

  const validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    imageUrl: yup
      .string()
      .url("Must be a valid URL")
      .required("Image URL is required"),
    genres: yup.array().of(yup.string().required("Genre is required")),
    socials: yup.array().of(
      yup.object({
        platform: yup.string().required("Platform is required"),
        url: yup
          .string()
          .url("Must be a valid URL")
          .required("URL is required"),
      })
    ),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      try {
        const artist = {
          name: values.name,
          photo_url: values.imageUrl,
          genres: values.genres,
          links: values.socials,
        };

        await CreateArtist(artist);
        toast.success("Artist has been successfully added!");
        onClose();
        onArtistAdded();
      } catch (error) {
        console.error(error);
        toast.error(
          "An error occurred while adding the artist. Please try again."
        );
      }
    },
  });

  const handleAdd = (field) => {
    formik.setFieldValue(field, [
      ...formik.values[field],
      field === "socials" ? { platform: "", url: "" } : "",
    ]);
  };

  const handleRemove = (field, index) => {
    formik.setFieldValue(
      field,
      formik.values[field].filter((_, i) => i !== index)
    );
  };

  return (
    <Drawer
      variant="persistent"
      open={open}
      onClose={onClose}
      anchor="left"
      sx={{
        ".MuiDrawer-paper": { backgroundColor: theme.palette.secondary.main },
      }}
    >
      <Grid item xs={3}>
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
              color: theme.palette.background.default,
              fontSize: "2.5rem",
            }}
          >
            Agregar Artista
          </h1>
          <form onSubmit={formik.handleSubmit}>
            <CustomInput
              label="Nombre del Artista"
              style={{ width: "100%", marginBlock: "25px" }}
              value={formik.values.name}
              onChange={formik.handleChange("name")}
            />
            <CustomInput
              label="URL de la imagen"
              style={{ width: "100%", marginBlock: "25px" }}
              value={formik.values.imageUrl}
              onChange={formik.handleChange("imageUrl")}
            />
            {formik.values.genres.map((genre, index) => (
              <div
                key={index}
                style={{ display: "flex", alignItems: "center" }}
              >
                <CustomInput
                  label={`Género ${index + 1}`}
                  style={{ width: "80%", marginBlock: "25px" }}
                  value={genre}
                  onChange={(e) =>
                    formik.setFieldValue(`genres.${index}`, e.target.value)
                  }
                />
                <IconButton onClick={() => handleRemove("genres", index)}>
                  <DeleteIcon />
                </IconButton>
              </div>
            ))}
            <CustomButton
              variant="contained"
              texto="Agregar otro género"
              onClick={() => handleAdd("genres")}
            />
            {formik.values.socials.map((social, index) => (
              <div
                key={index}
                style={{ display: "flex", alignItems: "center" }}
              >
                <CustomInput
                  label={`Plataforma ${index + 1}`}
                  style={{ width: "40%", marginBlock: "25px" }}
                  value={social.platform}
                  onChange={(e) =>
                    formik.setFieldValue(
                      `socials.${index}.platform`,
                      e.target.value
                    )
                  }
                />
                <CustomInput
                  label={`URL ${index + 1}`}
                  style={{ width: "40%", marginBlock: "25px" }}
                  value={social.url}
                  onChange={(e) =>
                    formik.setFieldValue(`socials.${index}.url`, e.target.value)
                  }
                />
                <IconButton onClick={() => handleRemove("socials", index)}>
                  <DeleteIcon />
                </IconButton>
              </div>
            ))}
            <CustomButton
              variant="contained"
              texto="Agregar otra red social"
              onClick={() => handleAdd("socials")}
            />
            <CustomButton variant="contained" texto="AGREGAR" type="submit" />
            <CustomButton
              variant="contained"
              texto="CANCELAR"
              onClick={onClose}
            />
          </form>
        </Container>
      </Grid>
    </Drawer>
  );
};
