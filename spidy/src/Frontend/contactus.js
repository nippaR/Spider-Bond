import React, { useState } from "react";
import { Box, Button, Grid, Stack, Typography, TextField } from "@mui/material";
import backgroundImage from '../img/logo.jpg';

const ContactUs = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [nameError, setNameError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);

    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
        setNameError(value.trim() === '');
    };

    const handlePhoneChange = (event) => {
        const value = event.target.value;
        setPhone(value);
        setPhoneError(!/^\d{10}$/.test(value)); // Example validation: must be a 10-digit number
    };

    const handleEmailChange = (event) => {
        const value = event.target.value;
        setEmail(value);
        setEmailError(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)); // Basic email format validation
    };

    const handleMessageChange = (event) => {
        const value = event.target.value;
        setMessage(value);
        setMessageError(value.trim() === '');
    };

    const handleSubmit = () => {
        const isNameValid = name.trim() !== '';
        const isPhoneValid = /^\d{10}$/.test(phone);
        const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        const isMessageValid = message.trim() !== '';

        setNameError(!isNameValid);
        setPhoneError(!isPhoneValid);
        setEmailError(!isEmailValid);
        setMessageError(!isMessageValid);

        if (isNameValid && isPhoneValid && isEmailValid && isMessageValid) {
            // Handle form submission
            console.log("Form submitted with:", { name, phone, email, message });
        }
    };

    return (
        <Grid>
            <Box
                sx={{
                    minHeight: '100vh',
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    display: 'flex',
                    flexDirection: 'column',
                    color: 'white',
                }}
            >
                <Stack spacing={12} direction="row" sx={{ ml: 15, gap: 15 }}>
                    <Grid item xs={12} sm={6} sx={{ fontFamily: 'poppins', fontWeight: '200px' }}>
                        <Typography sx={{ fontSize: '2rem', mt: 18, letterSpacing: '0.5rem' }}>
                            Do{<br />} You Need Contact Our
                        </Typography>
                        <Typography sx={{ fontSize: '3rem', letterSpacing: '0.1rem' }}>
                            Customer Service
                        </Typography>

                        <Box sx={{
                            width: '2px',
                            height: '250px',
                            backgroundColor: 'white',
                            alignSelf: 'stretch',
                        }} />

                        <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}> 
                        <Button
                            variant="contained"
                            sx={{ my: 3, borderRadius: '10px', fontFamily: 'poppins', backgroundColor: '#831005' }}
                        >
                            Click Here
                        </Button>
                        </a>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontFamily: 'poppins', fontWeight: '200px', fontSize: '3rem', mt: 12, ml: 25 }}>
                            Contact Us
                        </Typography>
                        <Box sx={{
                            width: '500px',
                            height: '480px',
                            backgroundColor: 'black',
                            borderRadius: '20px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            opacity: '0.8',
                            mt: 3,
                        }}>
                            <Grid sx={{
                                width: '400px',
                                borderRadius: '20px',
                                '& .MuiInputBase-root': {
                                    color: 'white',
                                },
                                '& .MuiFilledInput-root': {
                                    backgroundColor: 'transparent',
                                    '&:before': {
                                        borderBottom: '2px solid white',
                                    },
                                    '&:hover:not(.Mui-disabled):before': {
                                        borderBottom: '2px solid white',
                                    },
                                    '&:after': {
                                        borderBottom: '2px solid white',
                                    },
                                },
                                '& .MuiInputLabel-root': {
                                    color: 'white',
                                },
                            }}>
                                <TextField
                                    id="name"
                                    label="Name"
                                    maxRows={1}
                                    variant="filled"
                                    color="white"
                                    sx={{ width: '400px', mt: 2 }}
                                    value={name}
                                    onChange={handleNameChange}
                                    error={nameError}
                                    helperText={nameError ? "Name is required" : ""}
                                />
                                <TextField
                                    id="phone"
                                    label="Phone"
                                    maxRows={1}
                                    variant="filled"
                                    color="white"
                                    sx={{ width: '400px', mt: 3 }}
                                    value={phone}
                                    onChange={handlePhoneChange}
                                    error={phoneError}
                                    helperText={phoneError ? "Enter a valid 10-digit phone number" : ""}
                                />
                                <TextField
                                    id="email"
                                    label="Email"
                                    maxRows={1}
                                    variant="filled"
                                    color="white"
                                    sx={{ width: '400px', mt: 3 }}
                                    value={email}
                                    onChange={handleEmailChange}
                                    error={emailError}
                                    helperText={emailError ? "Enter a valid email address" : ""}
                                />
                                <TextField
                                    id="message"
                                    label="Message"
                                    maxRows={4}
                                    variant="filled"
                                    color="white"
                                    sx={{ width: '400px', mt: 3 }}
                                    value={message}
                                    onChange={handleMessageChange}
                                    error={messageError}
                                    helperText={messageError ? "Message is required" : ""}
                                />
                                <Button
                                    variant="contained"
                                    sx={{ width: '400px', mt: 4, borderRadius: '10px', backgroundColor: '#831005',fontFamily: 'poppins' }}
                                    onClick={handleSubmit}>Send</Button>
                            </Grid>
                        </Box>
                    </Grid>
                </Stack>
            </Box>
        </Grid>
    );
};

export default ContactUs;