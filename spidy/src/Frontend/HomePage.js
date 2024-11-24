import React from 'react';
import {Box, Grid, Typography,Button,Stack} from '@mui/material';
import backgroundImage from '../img/wp14198855.webp'; // Import the image
import Header from './Header';

const HomePage = () => {
  return (
  <Grid>
    <Box
      sx={{
        minHeight: '100vh', // Ensure it covers the full viewport height
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'block',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // textAlign: 'center',
        color: 'white',
      }}
    >
      <Header />
     
    <Stack spacing={12} direction="row" sx={{ml:7, my:5, gap:30 }}>
     <Grid item xs={12} sm={6}> 
     <Typography variant="h1" sx={{ my:5, fontFamily: 'poppins', fontWeight: 400, letterSpacing: '.5rem', fontSize: '4.5rem' }}>
       Spidey Bond
      </Typography>

            <Typography variant="h4" sx={{my:5, fontFamily: 'poppins', fontWeight: 100, fontSize: '1rem' }}>
                He said the idea for Spider-Man arose from a surge in teenage  {<br />}
                demand for comic books and the desire to create a character {<br />}
                with whom teens could identify. As with Fantastic Four, Lee saw {<br />}
                Spider-Man as an opportunity to "get out of his system" what he {<br />}
                felt was missing in comic books.
            </Typography>
      
              <Button variant="contained"
              sx={{my:5, 
                    fontFamily: 'poppins', 
                    fontWeight: 400, 
                    fontSize: '1rem',
                    backgroundColor:'#831005',
                    '&:hover':{color:'white'},
                    borderRadius:'10px' }}>
                  
                  Only Fans

              </Button>
      </Grid>
      <Grid item xs={12} sm={6}>
      <Box  sx={{
            width: '400px', // Set the width of the rectangle
            height: '480px', // Set the height of the rectangle
            backgroundColor: 'black', // Set the background color
            opacity: 0.6, // Set the opacity
            borderRadius: '80px', // Optional: add border radius for rounded corners
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Add shadow for depth
          }}>
      </Box>
      <Button variant="contained" 
        sx={{fontFamily: 'poppins',
             fontWeight: 400, 
             fontSize: '1rem', 
             backgroundColor:'black', 
             '&:hover':{color:'white'},
             borderRadius: '10px',
             my:1,
             ml:19,
              }}>
          Take Me
        </Button>
      </Grid>

      </Stack>
    </Box>
  </Grid>
  );
};

export default HomePage;