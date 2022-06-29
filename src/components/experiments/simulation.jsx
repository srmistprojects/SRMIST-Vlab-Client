/**
 * Experiment Simulation Component
 */

// Dependencies
import React from 'react';

// MUI
import { Box, Divider, Typography } from '@mui/material'

// Custom
import UnderConstruction from '../reusable/underconstruction';

const Simulation = () => {
  return (
    <Box>
      <Typography
        variant='h4'
      >Simulation</Typography>
      <Divider />
      <UnderConstruction />
    </Box>
  )
}

export default Simulation;