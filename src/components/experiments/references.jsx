/**
 * Experiment References Component
 */

// Dependencies
import React from 'react'
import { useOutletContext } from 'react-router-dom';

// MUI
import { Typography, Box, ListItem, List, ListItemIcon, ListItemText, Divider, Link } from '@mui/material';
import HdrStrongIcon from '@mui/icons-material/HdrStrong';
import HdrWeakIcon from '@mui/icons-material/HdrWeak';

const References = () => {
  const { references } = useOutletContext();

  return (
    <Box>
      <Typography
        variant='h4'
      >References</Typography>
      <Divider />
      <List>
        {
          references.map(({ link }, index) => (
            <ListItem>
              <ListItemIcon>
                {index % 2 === 1 ? <HdrStrongIcon /> : <HdrWeakIcon />}
              </ListItemIcon>
              <ListItemText>
                <Link href={link} target='_blank'>{link}</Link>
              </ListItemText>
            </ListItem>
          ))
        }
      </List>
    </Box>
  )
}

export default References