/**
 * Backdrop Component
 */

// Dependencies
import React from 'react';
import { useSelector } from 'react-redux';
import Main from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

function Backdrop() {
  const { isLoading } = useSelector((state) => state.app.value);
  return (
    <Main open={isLoading} sx={{ zIndex: 1000, color: 'white' }}>
      <CircularProgress color="inherit" />
    </Main>
  );
}

export default Backdrop;