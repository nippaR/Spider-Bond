import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Stack } from '@mui/material';
import image from '../img/91Zs13+1lBL.jpg';
import image1 from '../img/lVpjMFlt1DXsOgxsa9bwCByCwwn.jpg';
import image2 from '../img/spider-man-far-from-home.jpg';

export default function MediaCard() {
  const cards = [
    { image: image1, title: 'Spider Man 2002' },
    { image: image, title: 'Spider-Man: No Way Home' },
    { image: image2, title: 'Spider-Man: Far from Home' },
  ];

  return (
    <Box>
      <Stack spacing={12} direction="row" sx={{ ml: 7, fontFamily: 'Poppins', gap: 5, my: 5 }}>
        {cards.map((card, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: 345,
              ml: 5,
              my: 5,
              backgroundImage:'linear-gradient(45deg, #000000 30%, #831005 90%)',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >
            <CardMedia component="img" height="194" image={card.image} alt={card.title} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Poppins', color:'white' }}>
                {card.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'white', fontWeight: '300' }}>
                Spider-Man is a 2002 American superhero film based on the Marvel Comics character Spider-Man. Directed by Sam Raimi from a screenplay by David Koepp, it is the first installment in Raimi's Spider-Man trilogy.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
      </Stack>
    </Box>
  );
}