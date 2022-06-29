/**
 * Image Component
 */

// Dependencies
import React from 'react';

// MUI
import { Box } from '@mui/material';

const Image = ({ src, text }) => {
    return (
        <Box
            sx={{
                width: 'clamp(200px, 100%, 320px)',
                height: 'auto',
                objectFit: 'contain',
                borderRadius: '8px',
                margin: '1em 0',
            }}
        >
            <img
                src={src}
                alt={text}
                style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '8px',
                }}
            />
        </Box>
    )
}

export default Image;