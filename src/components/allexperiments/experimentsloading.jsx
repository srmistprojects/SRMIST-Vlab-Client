/**
 * Experiment loading component
 */

// Dependencies
import React from 'react';

// MUI
import { Box, Typography } from '@mui/material';

// Custom
import LoadingImage from '../../assets/page-loading.gif';

const ExperimentLoading = () => {
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
        alt='Experiment loading'
        style={{
          width: 'clamp(280px, 100%, 360px)',
          height: 'auto',
        }}
      />
      <Typography
        variant='h5'
        mt={2}
      >
        Getting experiment details!
      </Typography>
    </Box>
  )
}

export default ExperimentLoading;