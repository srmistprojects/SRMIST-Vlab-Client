/**
 * Experiment Drawer
 */

// Dependencies
import React from 'react';
import { useNavigate } from 'react-router-dom';

// MUI
import { Toolbar, Divider, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Avatar, Typography } from '@mui/material';
import FlagIcon from '@mui/icons-material/Flag';
import BookIcon from '@mui/icons-material/Book';
import MoveDownIcon from '@mui/icons-material/MoveDown';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import ComputerIcon from '@mui/icons-material/Computer';
import MovieIcon from '@mui/icons-material/Movie';
import AttachmentIcon from '@mui/icons-material/Attachment';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import GitHubIcon from '@mui/icons-material/GitHub';

// Custom
import SRMLogo from '../../assets/srmist-logo.png';

const experimentNavigation = [
    {
        name: 'Aim',
        link: 'aim',
        Icon: FlagIcon,
    },
    {
        name: 'Theory',
        link: 'theory',
        Icon: BookIcon,
    },
    {
        name: 'Procedure',
        link: 'procedure',
        Icon: MoveDownIcon,
    },
    {
        name: 'Observation',
        link: 'observation',
        Icon: ManageSearchIcon,
    },
    {
        name: 'Simulation',
        link: 'simulation',
        Icon: ComputerIcon,
    },
    {
        name: 'Videos',
        link: 'videos',
        Icon: MovieIcon,
    },
    {
        name: 'References',
        link: 'references',
        Icon: AttachmentIcon,
    },
];

const extraNavigation = [
    {
        name: 'Home',
        link: '/',
        Icon: HomeIcon,
    },
    {
        name: 'All Subjects',
        link: '/subjects',
        Icon: ArrowBackIcon,
    },
    {
        name: 'Project',
        link: '/project',
        Icon: InfoIcon,
    },
    {
        name: 'Contribute',
        link: '/project',
        Icon: GitHubIcon,
    },
];

const Drawer = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Toolbar>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1em',
                        cursor: 'pointer',
                    }}
                    title='Go back home'
                    onClick={() => navigate('/')}
                >
                    <Avatar src={SRMLogo} />
                    <Typography>SRMIST VLab</Typography>
                </Box>
            </Toolbar>
            <Divider />
            <List>
                {experimentNavigation.map(({ name, Icon, link }) => (
                    <ListItem
                        key={name}
                        disablePadding
                        onClick={() => navigate(link)}
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                <Icon />
                            </ListItemIcon>
                            <ListItemText primary={name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {extraNavigation.map(({ link, Icon, name }) => (
                    <ListItem
                        key={name}
                        disablePadding
                        onClick={() => navigate(link)}
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                <Icon />
                            </ListItemIcon>
                            <ListItemText primary={name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    )
}

export default Drawer;