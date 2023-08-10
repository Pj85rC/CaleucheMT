// DrawerFormArtist.jsx
import { Drawer, Container, Grid } from "@mui/material";
import { CustomButton } from "../components/UI/CustomButton";
import { Input } from "../components/UI/Input";
import { useState } from "react";
import { useTheme } from "@emotion/react";
import DeleteIcon from "@mui/icons-material/Delete";

export const DrawerFormArtist = ({
  isOpen,
  onClose,
  handleSubmit,
  setName,
  setImageUrl,
  name,
  imageUrl
}) => {
  const theme = useTheme();

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

  return (
    <Drawer open={isOpen} onClose={onClose} anchor="left">
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
            {genres.map((genre, index) => (
              <div
                key={index}
                style={{ display: "flex", alignItems: "center" }}
              >
                <Input
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
                <Input
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
            <CustomButton variant="contained" texto="AGREGAR" />
            <CustomButton variant="contained" texto="CANCELAR" onClick={onClose} />
          </form>
        </Container>
      </Grid>
    </Drawer>
  );
};
