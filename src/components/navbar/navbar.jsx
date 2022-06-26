/**
 * Navbar
 */

// Dependencies
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// MUI
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, MenuItem, styled } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

// Custom
import SRMLogo from '../../assets/srmist-logo.png';

const NavbarButton = styled(Button)({
    color: '#063A7E',
    display: 'block',
    my: 2,
    transition: 'all 100ms ease-in-out',
    ':hover': {
        backgroundColor: '#063A7E40',
    }
})

const pages = [
    { name: 'Subjects', page: '/subjects' },
    { name: 'Project', page: '/project' },
    { name: 'Visit SRMIST', page: '/project' }
];

const Navbar = () => {
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" color='transparent'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Avatar
                        src={SRMLogo}
                        sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, cursor: 'pointer' }}
                        onClick={() => navigate('/')}
                        title="SRMIST VLab"
                    />
                    <Typography
                        variant="h6"
                        noWrap
                        onClick={() => navigate('/')}
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        SRMIST VLab
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.name} onClick={(e) => { handleCloseNavMenu(e); navigate(page.page) }}>
                                    <Typography textAlign="center">{page.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Avatar src={SRMLogo} sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        SRMIST VLab
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <NavbarButton
                                key={page.name}
                                onClick={(e) => { handleCloseNavMenu(e); navigate(page.page) }}
                            >
                                {page.name}
                            </NavbarButton>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navbar;
