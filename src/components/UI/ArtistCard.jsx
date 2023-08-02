import { Card, CardMedia, CardContent, Typography, IconButton } from '@mui/material';
import { Instagram, Facebook, Twitter } from '@mui/icons-material';



const ArtistCard = ({ artist }) => {
  console.log(artist)
    return (
      <Card style={{ maxWidth: 230, margin: 'auto', backgroundColor: '#2c2c2c' }}>
        <CardMedia
          component="img"
          height="140"
          image={artist.image}
          alt={artist.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{ color: '#fff' }}>
            {artist.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{ color: '#fff' }}>
            {artist.genres.join(', ')}
          </Typography>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
            {artist.socials.instagram && (
              <IconButton color="inherit" href={artist.socials.instagram} target="_blank">
                <Instagram />
              </IconButton>
            )}
            {artist.socials.facebook && (
              <IconButton color="inherit" href={artist.socials.facebook} target="_blank">
                <Facebook />
              </IconButton>
            )}
            {artist.socials.twitter && (
              <IconButton color="inherit" href={artist.socials.twitter} target="_blank">
                <Twitter />
              </IconButton>
            )}
          </div>
        </CardContent>
      </Card>
    );
  };
  
  export default ArtistCard;