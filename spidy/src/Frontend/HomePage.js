import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import backgroundImage from '../img/wp14198855.webp'; // Import the image

const HomePage = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh', // Ensure it covers the full viewport height
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        opacity: 0.9, // Add some transparency
      }}
    >
      <Typography variant="h2" gutterBottom>
        Welcome to Spidy Bond
      </Typography>
      <Button size='50%'>OnlyFans</Button>
      <Typography variant="body1" fontSize="50px">
       Only Fans
      </Typography>
    </Box>
  );
};

export default HomePage;