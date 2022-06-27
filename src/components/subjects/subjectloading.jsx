/**
 * Subject loading component
 */

// Dependencies
import React from 'react';

// MUI
import { Box, Typography } from '@mui/material';

// Custom
import LoadingImage from '../../assets/book-loading.gif';

const SubjectLoading = () => {
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
                src={LoadingImage}
                alt='Subjects loading'
                style={{
                    width: 'clamp(280px, 100%, 360px)',
                    height: 'auto',
                }}
            />
            <Typography
                variant='h5'
                mt={2}
            >
                Getting list of subjects!
            </Typography>
        </Box>
    )
}

export default SubjectLoading;