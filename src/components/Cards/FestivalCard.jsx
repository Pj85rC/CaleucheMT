import { useState, useContext, useEffect } from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
  IconButton,
} from "@mui/material";
import { AuthContext } from "../../context/AuthContext";
import { FavoritesContext } from "../../context/FavContext";
import { addFavorite, removeFavorite } from "../../api/favorites";
import { CustomButton } from "../CustomButton";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const FestivalCard = ({
  id,
  title,
  imageUrl,
  description,
  onDetailClick,
}) => {
  const theme = useTheme();
  const { user } = useContext(AuthContext);
  const { favorites, setFavorites } = useContext(FavoritesContext);
  const userId = user.userId;

  const isFavorited = favorites.some((fav) => fav.festival_id === id);

  const toggleFavorite = async () => {
    if (isFavorited) {
      await removeFavorite(id, userId);
      const updatedFavorites = favorites.filter(
        (fav) => fav.festival_id !== id
      );
      setFavorites(updatedFavorites);
    } else {
      await addFavorite(id, userId);
      const newFavorite = { festival_id: id };
      setFavorites([...favorites, newFavorite]);
    }
  };

  return (
    <Card
      sx={{
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        mt: "5rem",
      }}
    >
      <CardActionArea
        onClick={onDetailClick}
        sx={{
          color: theme.palette.secondary.main,
          padding: "2.5rem",
        }}
      >
        <CardMedia component="img" height="250" image={imageUrl} alt={title} />
        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite();
          }}
          sx={{ position: "absolute", top: "45px", right: "45px" }}
        >
          {isFavorited ? (
            <FavoriteIcon color="error" sx={{ strokeWidth: 2 }} />
          ) : (
            <FavoriteBorderIcon
              color="white"
              sx={{ strokeWidth: 2, color: "white" }}
            />
          )}
        </IconButton>
        <CardContent sx={{ color: theme.palette.text.card }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography sx={{ fontSize: 15, mb: 2 }} variant="body2">
            {description}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <CustomButton
            onClick={onDetailClick}
            variant="outlined"
            texto="ver detalle"
          />
        </Box>
      </CardActionArea>
    </Card>
  );
};
