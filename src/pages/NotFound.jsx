/**
 * Not Found Page
 */

// Dependencies
import React from 'react';
import { useNavigate } from 'react-router-dom';

// MUI
import { Container, Button, Typography, Box } from '@mui/material';

// Components
import Navbar from '../components/reusable/navbar'

// Custom
import NotFoundImage from '../assets/not-found.gif';

const NotFound = () => {
    const navigate = useNavigate();

    const handleNavigateBack = () => {
        console.log('going back')
        navigate('/');
    }

    return (
        <Box
            sx={{
                height: '100%',
            }}
        >
            <Navbar />
            <Container
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    height: '100%',
                }}
            >
                <img
                    src={NotFoundImage}
                    alt='Page not found'
                    style={{
                        width: 'clamp(240px, 100%, 360px)',
                        height: 'auto',
                    }}
                />
                <Typography
                    variant='h6'
                >The page you're looking for does not exist!</Typography>
                <Button
                    onClick={handleNavigateBack}
                    variant='outlined'
                    sx={{
                        mt: '1em',
                    }}
                >
                    Go to home
                </Button>
            </Container>
        </Box>
    )
}

export default NotFound