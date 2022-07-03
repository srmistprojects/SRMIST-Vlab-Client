/**
 * Main Skeleton
 */

// Dependencies
import React from 'react';

// MUI
import { Skeleton, Box, Container } from '@mui/material';

const MainSkeleton = () => {
    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
            }}
        >
            <Skeleton
                variant='rectangular'
                height={68}
            />
            <Container
                sx={{
                    padding: '1em',
                }}
            >
                <Skeleton
                    height={100}
                />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton
                    height={200}
                />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
            </Container>
        </Box>
    )
}

export default MainSkeleton;