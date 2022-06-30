/**
 * Experiment Videos Component
 */

// Dependencies
import React from 'react'
import { useOutletContext } from 'react-router-dom';

// MUI
import { Typography, Box, ListItem, List, ListItemIcon, ListItemText, Divider } from '@mui/material';
import HdrStrongIcon from '@mui/icons-material/HdrStrong';
import HdrWeakIcon from '@mui/icons-material/HdrWeak';

// Custom
import YoutubeEmbed from '../reusable/youtubeembed';

const Videos = () => {
  const { videos } = useOutletContext();

  return (
    <Box>
      <Typography
        variant='h4'
      >Videos</Typography>
      <Divider />
      <List>
        {
          videos.map(({ link }, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                {index % 2 === 1 ? <HdrStrongIcon /> : <HdrWeakIcon />}
              </ListItemIcon>
              <ListItemText>
                <YoutubeEmbed embedLink={link} />
              </ListItemText>
            </ListItem>
          ))
        }
      </List>
    </Box>
  )
}

export default Videos;