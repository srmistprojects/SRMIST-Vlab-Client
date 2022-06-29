/**
 * Fetching error component
 */

// Dependencies
import React from 'react';
import { useNavigate } from 'react-router-dom';

// MUI
import { Box, Button, Typography, Grid } from '@mui/material';

// Custom
import ErrorImage from '../../assets/loading-error.gif';

const ErrorScreen = ({ onPress, title }) => {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <img
                src={ErrorImage}
                alt='Error loading subjects'
                style={{
                    width: 'clamp(240px, 100%, 360px)',
                    height: 'auto',
                    opacity: '0.8',
                }}
            />
            <Box
                sx={{
                    mt: { xs: 4, md: 8 },
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2
                }}
            >
                <Typography
                    variant='h5'
                >
                    {title}
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={6}>
                        <Button
                            variant='contained'
                            onClick={onPress}
                            fullWidth
                            sx={{ zIndex: 100 }}
                        >
                            Try again?
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            variant='outlined'
                            onClick={() => navigate('/')}
                            fullWidth
                            sx={{ zIndex: 100 }}
                        >
                            Go home.
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default ErrorScreen;