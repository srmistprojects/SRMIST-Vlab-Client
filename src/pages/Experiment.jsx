/**
 * Single Experiment Page
 */

// Dependencies
import React, { useState, useMemo, useEffect } from 'react';
import { Outlet, useParams, } from 'react-router-dom';
import { useDispatch } from 'react-redux/es/exports';

// MUI
import { AppBar, Box, CssBaseline, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

// Components
import ExperimentDrawer from '../components/experiments/drawer';
import ErrorScreen from '../components/reusable/errorscreen';
import ExperimentsLoading from '../components/allexperiments/experimentsloading';

// Actions
import { showLoading, showSnackbar } from '../store/features/app';

// Custom
import { fetchSingleExperiment } from '../utils/apis';

const drawerWidth = 240;
function Experiment(props) {
    const dispatch = useDispatch();
    const { experimentName } = useParams();
    const [error, setError] = useState(false);
    const [retry, setRetry] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [experiment, setExperiment] = useState(
        sessionStorage.getItem(experimentName) ?
            JSON.parse(sessionStorage.getItem(experimentName)) : null
    );
    const { window } = props;

    const isExperimentLoaded = typeof experiment === 'object' ? experiment?.hasOwnProperty('aim') : false;

    const [experimentId, currentExperiment] = useMemo(() => {
        const _id = experimentName.split('--').shift();
        const expName = experimentName
            .split('--')
            .pop()
            .split('-')
            .map(word => {
                const letter = word.charAt(0).toUpperCase() + word.slice(1);
                return letter;
            }).join(' ');
        return [_id, expName];
    }, [experimentName]);

    useEffect(() => {
        const handleFetchSingleExperiment = async () => {
            try {
                dispatch(showLoading(true));
                const exp = await fetchSingleExperiment(experimentId);
                setExperiment(exp);
                sessionStorage.setItem(experimentName, JSON.stringify(exp));
            } catch (error) {
                dispatch(showSnackbar({ message: 'Unable to get experiment, try again.' }))
                setError(true);
            } finally {
                dispatch(showLoading(false));
            }
        }

        if (!isExperimentLoaded) handleFetchSingleExperiment();
    }, [dispatch, isExperimentLoaded, experimentId, experimentName]);

    const handleRetry = () => {
        setRetry(!retry);
        setError(false);
    }

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const container = window !== undefined ? () => window().document.body : undefined;

    const MainComponent = () => {
        return (
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                    }}
                    color='default'
                >
                    <Toolbar >
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ color: 'black', }}>
                            <p>{currentExperiment}</p>
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        <ExperimentDrawer />
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        <ExperimentDrawer />
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >
                    <Toolbar />
                    <Outlet context={{ ...experiment }} />
                </Box>
            </Box>
        );
    }

    return (
        <>
            {
                isExperimentLoaded && experiment ? <MainComponent /> :
                    error ? <ErrorScreen onPress={handleRetry} title={`Unable to get ${currentExperiment}!`} /> : <ExperimentsLoading />
            }
        </>
    );
}

export default Experiment;
