import React from 'react';
import { Box, Grid, Typography, Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../img/wp14198855.webp';
import TakeMe from './TakeMe';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Grid>
      <Box
        sx={{
          minHeight: '100vh',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'block',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <Stack spacing={12} direction="row" sx={{ ml: 7, gap: 30 }}>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="h1"
              sx={{
                my: 5,
                fontFamily: 'poppins',
                fontWeight: 400,
                letterSpacing: '.5rem',
                fontSize: '4.5rem',
              }}
            >
              Spidey Bond
            </Typography>

            <Typography
              variant="h4"
              sx={{ my: 5, fontFamily: 'poppins', fontWeight: 250, fontSize: '1rem' }}
            >
              He said the idea for Spider-Man arose from a surge in teenage <br />
              demand for comic books and the desire to create a character <br />
              with whom teens could identify. As with Fantastic Four, Lee saw <br />
              Spider-Man as an opportunity to "get out of his system" what he <br />
              felt was missing in comic books.
            </Typography>

            <Button
              variant="contained"
              sx={{
                my: 5,
                fontFamily: 'poppins',
                fontWeight: 400,
                fontSize: '1rem',
                backgroundColor: '#831005',
                '&:hover': { color: 'white' },
                borderRadius: '10px',
              }}
              onClick={() => navigate('/products')}
            >
              Only Fans
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ mt: 5 }}>
            <TakeMe />
            <Button
              variant="contained"
              sx={{
                fontFamily: 'poppins',
                fontWeight: 400,
                fontSize: '1rem',
                backgroundColor: 'black',
                '&:hover': { color: 'white' },
                borderRadius: '10px',
                my: 0,
                ml: 19,
              }}
              onClick={() => navigate('/products')}
            >
              Take Me
            </Button>
          </Grid>
        </Stack>
      </Box>
    </Grid>
  );
};

export default HomePage;