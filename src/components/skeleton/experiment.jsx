/**
 * Experiment Skeleton
 */

import React from 'react';

// MUI
import { Skeleton, Box, Container, Avatar, Typography } from '@mui/material';

const ExperimentSkeleton = () => {

    const ListLoad = () => {
        return (
            <Box mt={2}>
                <Box
                    sx={{
                        display: 'flex',
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '.5em',
                    }}
                >
                    <Skeleton variant='circular' sx={{ width: '20px', height: '20px' }}>
                        <Avatar />
                    </Skeleton>
                    <Skeleton
                        sx={{
                            flex: '1',
                        }}
                    />
                </Box>
                <Skeleton />
            </Box>
        )
    }

    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                padding: '1em',
            }}
        >
            <Skeleton
                sx={{
                    width: '50%',
                    height: '60px',
                }}
            />
            <Skeleton />
            {
                [1, 2, 3, 4, 5, 6].map((num) => (
                    <Box key={num}>
                        <ListLoad />
                        {num % 3 === 0 ? <Skeleton
                            variant='rectangular'
                            sx={{
                                width: '60%',
                                height: '100px',
                                mx: 'auto',
                                mt: 2,
                            }}
                        /> : null}
                    </Box>
                ))
            }
        </Box>
    )
}

export default ExperimentSkeleton;