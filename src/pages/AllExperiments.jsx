/**
 * All Experiments Page (for a single experiment)
 */

// Dependencies
import React, { useMemo, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// MUI
import { Box, Link, Typography, Container, Grid } from '@mui/material';

// Components
import Navbar from '../components/reusable/navbar';
import ExperimentsLoading from '../components/allexperiments/experimentsloading';
import ExperimentsCard from '../components/allexperiments/experimentscard';
import ErrorScreen from '../components/reusable/errorscreen';

// Actions
import { showLoading, showSnackbar } from '../store/features/app';

// Custom
import { fetchAllExperiments } from '../utils/apis';

const AllExperiments = () => {
    const { subjectName } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [error, setError] = useState(false);
    const [reset, setReset] = useState(false);
    const [experiments, setExperiments] = useState(
        sessionStorage.getItem(subjectName) ?
            JSON.parse(sessionStorage.getItem(subjectName)) : []
    );

    const [subjectId, currentSubject] = useMemo(() => {
        const _id = subjectName.split('--').shift();
        const subName = subjectName
            .split('--')
            .pop()
            .split('-')
            .map(word => {
                const letter = word.charAt(0).toUpperCase() + word.slice(1);
                return letter;
            }).join(' ');
        return [_id, subName];
    }, [subjectName]);

    useEffect(() => {
        const handleFetchAllExperiments = async () => {
            try {
                dispatch(showLoading(true));
                const allExperiments = await fetchAllExperiments(subjectId);
                allExperiments.forEach((exp) => {
                    exp.description = exp.aim[0].text;
                    delete exp.aim;
                });
                setExperiments(allExperiments);
                sessionStorage.setItem(subjectName, JSON.stringify(allExperiments));
            } catch (error) {
                dispatch(showSnackbar({ message: 'Unable to get experiments, try again.' }))
                setError(true);
            } finally {
                dispatch(showLoading(false));
            }
        }

        if (experiments.length === 0) handleFetchAllExperiments();
    }, [dispatch, experiments.length, subjectId, subjectName]);

    const handleRetry = () => {
        setReset(!reset);
        setError(false);
    }

    const ExperimentsContainer = () => {
        return (
            <Grid container
                spacing={{ xs: 2, md: 4 }}
                zIndex={0}
            >
                {
                    experiments.length > 0 && experiments.map((experiment) => (
                        <Grid item key={experiment.name} xs={12} md={6} lg={4}>
                            <ExperimentsCard {...experiment} />
                        </Grid>
                    ))
                }
            </Grid>
        )
    }

    return (
        <Box>
            <Navbar />
            <Container
                sx={{
                    padding: '2em',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    gap: '1em',
                    zIndex: 50,
                }}
            >
                <Box
                    display='flex'
                    alignItems='center'
                    justifyContent='space-between'
                    width='100%'
                >
                    <Typography
                        variant='h5'
                    >
                        {currentSubject}
                    </Typography>
                    <Link
                        onClick={() => navigate('/subjects')}
                        variant='button'
                        sx={{ cursor: 'pointer' }}
                    >
                        Go back
                    </Link>
                </Box>
                {
                    experiments.length > 0 && !error ? <ExperimentsContainer /> :
                        error ? <ErrorScreen title='There was an issue getting the experiments!' onPress={handleRetry} /> : <ExperimentsLoading />
                }
            </Container>
        </Box>
    )
}

export default AllExperiments;