import { Grid,Stack,Typography,Box,Button } from "@mui/material";
import React from "react";
import backgroundImage from '../img/wp14198855.webp';
import Card from './Card.js';


const Products = () => {
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
                <Stack spacing={12} direction={'row'} sx={{ ml: 7, fontFamily: 'Poppins', gap: 20 }}>
                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ my:5 , fontSize: '2rem', fontWeight: 500, color:'White' }}>
                            Products
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6} >
                        <Button variant="contained" 
                            sx={{fontFamily: 'poppins',
                                fontWeight: 400, 
                                fontSize: '1rem', 
                                backgroundColor:'black', 
                                '&:hover':{color:'white'},
                                borderRadius: '10px',
                                my:8,
                                ml:102.5,
                                }}>
                            Take Me
                        </Button>
                    </Grid>               
                </Stack>
                <Card/>
            </Box>
            
        </Grid>
    );
};

export default Products;