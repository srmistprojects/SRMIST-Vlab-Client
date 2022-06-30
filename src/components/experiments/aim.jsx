/**
 * Experiment Aim Component
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

const Aim = () => {
  const { aim } = useOutletContext();

  return (
    <Box>
      <Typography
        variant='h4'
      >Aim</Typography>
      <Divider />
      <List>
        {
          aim.map(({ text, image }, index) => (
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

export default Aim;