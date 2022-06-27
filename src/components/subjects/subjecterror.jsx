/**
 * Fetching Subjects error component
 */

// Dependencies
import React from 'react';

// MUI
import { Box, Button, Typography } from '@mui/material';

// Custom
import ErrorImage from '../../assets/loading-error.gif';

const SubjectError = ({ onPress }) => {
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
                    width: 'clamp(280px, 100%, 360px)',
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
                    There was an issue getting the subjects!
                </Typography>
                <Button
                    variant='outlined'
                    onClick={onPress}
                >
                    Try again?
                </Button>
            </Box>
        </Box>
    )
}

export default SubjectError;