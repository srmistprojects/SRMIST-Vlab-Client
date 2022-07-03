/**
 * Experiment Observation Component
 */

// Dependencies
import React from 'react';
import { useOutletContext } from 'react-router-dom';

// MUI
import { Typography, Box, ListItem, List, ListItemIcon, ListItemText, Divider } from '@mui/material';
import HdrStrongIcon from '@mui/icons-material/HdrStrong';
import HdrWeakIcon from '@mui/icons-material/HdrWeak';

// Custom
import Image from '../reusable/image';

const Observation = () => {
  const { observation } = useOutletContext();

  return (
    <Box>
      <Typography
        variant='h4'
      >Observation</Typography>
      <Divider />
      <List>
        {
          observation.map(({ text, image }, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                {index % 2 === 1 ? <HdrStrongIcon /> : <HdrWeakIcon />}
              </ListItemIcon>
              <ListItemText>
                <Typography
                  variant='body1'
                >{text ? text : null}</Typography>
                {image ? <Image src={image} text={text} /> : null}
              </ListItemText>
            </ListItem>
          ))
        }
      </List>
    </Box>
  )
}

export default Observation;