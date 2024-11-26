import { Grid, Stack, Typography, IconButton, Box } from "@mui/material";
import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import image1 from "../img/SP3.png";

const Footer = () => {
    return (
        <Grid
            sx={{
                backgroundImage: 'linear-gradient(45deg, #000000 30%, #831005 90%)', // Set your desired background image
                // backgroundColor: '#333', // Set your desired background color
                color: 'white', // Ensure text is readable
                padding: '20px', // Add padding for spacing
            }}
        >
            <Stack spacing={12} direction={'row'} sx={{ ml: 7, fontFamily: 'Poppins', my: 2, gap: 20 }}>
                <Grid item xs={12} sm={6}>
                    <Typography sx={{ fontSize: '1.2rem', fontWeight: 500 }}>
                        Category
                    </Typography>
                    <Typography sx={{ fontSize: '1rem', my: 2 }}>
                        Products<br />
                        Accounts<br />
                        Events<br />
                        Service Catalog
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography sx={{ fontSize: '1.2rem', fontWeight: 500 }}>
                        Company
                    </Typography>
                    <Typography sx={{ fontSize: '1rem', my: 2 }}>
                        About Us<br />
                        Helps & Support<br />
                        Privacy Policy<br />
                        Blog
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography sx={{ fontSize: '1.2rem', fontWeight: 500 }}>
                        For Client
                    </Typography>
                    <Typography sx={{ fontSize: '1rem', my: 2 }}>
                        Trust & Safety<br />
                        Client Guides<br />
                        Quality Guides<br />
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img src={image1} alt="Footer" style={{ width: '150px', height: 'auto' }} />
                </Grid>
            </Stack>
            <hr />
            <Stack spacing={12} direction={'row'} sx={{ ml: 7, fontFamily: 'Poppins', my: 2, gap: 20 }}>
                <Grid item xs={12} sm={6}>
                    <Typography sx={{ fontSize: '1.2rem', fontWeight: 500, letterSpacing: '0.8rem' }}>
                        Spidey Bond<sup>©</sup>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box sx={{ ml: 70 }}>
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
                </Grid>
            </Stack>
        </Grid>
    );
};

export default Footer;