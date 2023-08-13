import { Drawer, Container, Grid, IconButton, useTheme } from "@mui/material";
import { CustomButton } from "./CustomButton";
import { CustomInput } from "../components/Inputs/CustomInput";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export const DrawerFormArtist = ({
  open,
  onClose,
  handleSubmit,
  setName,
  setImageUrl,
  name,
  imageUrl,
  ...props
}) => {
  const theme = useTheme();
  console.log(theme.palette.background2.default);

  const [genres, setGenres] = useState([""]);
  const [socials, setSocials] = useState([""]);

  const addGenre = () => {
    setGenres((prevGenres) => [...prevGenres, ""]);
  };

  const removeGenre = (index) => {
    setGenres((prevGenres) => prevGenres.filter((_, i) => i !== index));
  };

  const addSocial = () => {
    setSocials((prevSocials) => [...prevSocials, ""]);
  };

  const removeSocial = (index) => {
    setSocials((prevSocials) => prevSocials.filter((_, i) => i !== index));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubmit();
  };

  return (
    <Drawer
      variant="persistent"
      open={open}
      onClose={onClose}
      {...props}
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
          <form onSubmit={handleFormSubmit}>
            <CustomInput
              label="Nombre del Artista"
              style={{ width: "100%", marginBlock: "25px" }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <CustomInput
              label="URL de la imagen"
              style={{ width: "100%", marginBlock: "25px" }}
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
            {genres.map((genre, index) => (
              <div
                key={index}
                style={{ display: "flex", alignItems: "center" }}
              >
                <CustomInput
                  label={`Género ${index + 1}`}
                  style={{ width: "80%", marginBlock: "25px" }}
                  value={genre}
                  onChange={(e) => {
                    const newValue = e.target.value;
                    setGenres((prevGenres) =>
                      prevGenres.map((g, i) => (i === index ? newValue : g))
                    );
                  }}
                />
                <IconButton onClick={() => removeGenre(index)}>
                  <DeleteIcon />
                </IconButton>
              </div>
            ))}
            <CustomButton
              variant="contained"
              texto="Agregar otro género"
              onClick={addGenre}
            />
            {socials.map((social, index) => (
              <div
                key={index}
                style={{ display: "flex", alignItems: "center" }}
              >
                <CustomInput
                  label={`Red Social ${index + 1}`}
                  style={{ width: "80%", marginBlock: "25px" }}
                  value={social}
                  onChange={(e) => {
                    const newValue = e.target.value;
                    setSocials((prevSocials) =>
                      prevSocials.map((s, i) => (i === index ? newValue : s))
                    );
                  }}
                />
                <IconButton onClick={() => removeSocial(index)}>
                  <DeleteIcon />
                </IconButton>
              </div>
            ))}
            <CustomButton
              variant="contained"
              texto="Agregar otra red social"
              onClick={addSocial}
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
