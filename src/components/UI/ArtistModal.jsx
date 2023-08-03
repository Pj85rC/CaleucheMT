import { IconButton, ListItem, ListItemSecondaryAction, ListItemText } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Artist = ({ artist, handleDelete, handleEdit }) => (
  <ListItem>
    <ListItemText
      primary={artist.name}
      secondary={artist.genre}
    />
    <ListItemSecondaryAction>
      <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(artist)}>
        <EditIcon />
      </IconButton>
      <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(artist.id)}>
        <DeleteIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);
