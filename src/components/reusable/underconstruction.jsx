/**
 * Under Construction component
 */

// Dependencies
import React from 'react';

// MUI
import { Box, Container, Typography } from '@mui/material';

// Custom
import UnderConstructionImage from '../../assets/under-construction.gif';

const UnderConstruction = () => {
    return (
        <Box>
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <img
                    src={UnderConstructionImage}
                    alt='page under construction'
                    style={{
                        width: 'min(100%, 400px)'
                    }}
                />
                <Typography>Page Under Construction!</Typography>
            </Container>
        </Box>
    )
}

export default UnderConstruction;