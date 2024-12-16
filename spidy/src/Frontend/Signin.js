import { Box, Grid, TextField, IconButton, Typography, Divider,Button } from '@mui/material';
import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import backgroundImage from '../img/wp14198855.webp';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const StyledLink = styled(RouterLink)({
  color: 'red',
  textDecoration: 'none', // Optional: to remove underline
});

const Signin = () => {
    return (
    <Grid sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        // backgroundImage:'linear-gradient(45deg, #000000 30%, #831005 90%)',
        color: 'white',
        fontFamily: 'poppins',
        fontSize: '1.5rem',
      }}>
      <Box sx = {{
        width: '500px',height: '500px',
        backgroundColor: 'black',
        borderRadius: '15px',
        my: 3,
        opacity: '0.8',
        border: '1px solid red',
      }}>
        <Typography sx={{ fontFamily: 'poppins', fontWeight: '200px', fontSize: '3rem', mt: 2, ml: 19 }}>
        SIGN IN
        </Typography>
      
        <Divider sx={{ width: '400px', ml: 5, mt: 2, borderColor:"white" }} />
        <Grid sx={{
                    width: '400px',
                    borderRadius: '20px',
                    '& .MuiInputBase-root': {
                        color: 'white',
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'white',
                            borderRadius: '10px', // Set the desired border radius
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
        <TextField id="oued-basic"
        name = "Username"
        label="Enter Name" 
        variant="outlined"
        sx={{ width: '400px', mt: 5, ml: 5 }}
         />

        <TextField id="oued-basic"
        name = "Username"
        label="Enter Your Email" 
        variant="outlined"
        sx={{ width: '400px', mt: 5, ml: 5 }}
         />
        <Button>
            <RouterLink to="/home">Sign In</RouterLink>
        </Button>
        </Grid>  
                                 
        <Box sx={{ mt:4, ml:20}}>
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
        <Divider sx={{ width: '400px', ml: 5, mt: 2, borderColor:"white" }} />                   
            <Typography sx={{ml: 8, mt:2}}>
            If you didn't have account, <StyledLink to="/register">click here</StyledLink> to register
            </Typography>                         
      </Box>
    </Grid>

    )
};


export default Signin;