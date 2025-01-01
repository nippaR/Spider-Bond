import React, { useState } from "react";
import { Box, Grid, TextField, IconButton, Typography, Divider, Button, InputAdornment } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import backgroundImage from '../img/wp14198855.webp';
import { Link as RouterLink } from 'react-router-dom';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Grid sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundImage: `url(${backgroundImage})`,
      color: 'white',
      fontFamily: 'poppins',
      fontSize: '1.5rem',
    }}>
      <Box sx={{
        width: '500px', height: '500px',
        backgroundColor: 'black',
        borderRadius: '15px',
        my: 3,
        opacity: '0.8',
        border: '1px solid red',
      }}>
        <Typography sx={{ fontFamily: 'poppins', fontWeight: '200px', fontSize: '3rem', mt: 2, ml: 19 }}>
          SIGN UP
        </Typography>

        <Divider sx={{ width: '400px', ml: 5, mt: 2, borderColor: "white" }} />
        <Grid sx={{
          width: '400px',
          borderRadius: '20px',
          '& .MuiInputBase-root': {
            color: 'white',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white',
              borderRadius: '10px',
            },
            '&:hover fieldset': {
              borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'white',
            },
          },
          '& .MuiInputLabel-root': {
            color: 'white',
          },
        }}>
          <TextField
            id="name"
            name="Username"
            label="Enter Name"
            variant="outlined"
            sx={{ width: '400px', mt: 5, ml: 5 }}
          />

          <TextField
            id="password"
            name="Password"
            label="Enter Your password"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            sx={{ width: '400px', mt: 5, ml: 5 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    sx={{ color: 'white' }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <TextField
            id="email"
            name="Email"
            label="Enter Your Email"
            variant="outlined"
            sx={{ width: '400px', mt: 5, ml: 5 }}
          />
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Button  variant="contained" sx={{ width: '100px', mt: 5, ml:9, backgroundColor: 'red', color: 'white' }}>
            <RouterLink to="/home" style={{textDecoration:'none',color:'white',fontWeight:'bold'}}>Sign Up</RouterLink>
          </Button>
        </Box>
        </Grid>

        <Box sx={{ mt: 4, ml: 20 }}>
          <IconButton aria-label="Linkedin" sx={{ color: 'white' }}>
            <LinkedInIcon />
          </IconButton>
          <IconButton aria-label="FaceBook" sx={{ color: 'white' }}>
            <FacebookIcon />
          </IconButton>
          <IconButton aria-label="Insta" sx={{ color: 'white' }}>
            <InstagramIcon />
          </IconButton>
          <IconButton aria-label="X" sx={{ color: 'white' }}>
            <XIcon />
          </IconButton>
        </Box>
      </Box>
    </Grid>
  );
};

export default Register;