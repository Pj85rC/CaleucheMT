import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
} from "@mui/material";
import { Buttons } from "./Buttons";

export const FestivalCard = ({
  title,
  imageUrl,
  description,
  onDetailClick,
}) => {
  const theme = useTheme();

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
        }}
      >
        <CardMedia component="img" height="250" image={imageUrl} alt={title} />
        <CardContent sx={{ color: theme.palette.text.card }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography sx={{ fontSize: 15, mb: 2 }} variant="body2">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Buttons
          onClick={onDetailClick}
          variant="outlined"
          color={theme.palette.primary.main}
          texto="ver detalle"
          borderColor={theme.palette.primary.main}
        />
      </Box>
    </Card>
  );
};
