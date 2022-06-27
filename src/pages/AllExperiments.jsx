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
import ExperimentsCard from '../components/allexperiments/experimentscard';
import ExperimentsError from '../components/allexperiments/experimentserror';
import ExperimentsLoading from '../components/allexperiments/experimentsloading';

// Actions
import { showLoading, showSnackbar } from '../store/features/app';

// Custom
import { fetchAllExperiments } from '../utils/apis';

const AllExperiments = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { subjectName } = useParams();

    const [error, setError] = useState(false);
    const [reset, setReset] = useState(false);
    const [experiments, setExperiments] = useState(
        sessionStorage.getItem(subjectName) ?
            JSON.parse(sessionStorage.getItem(subjectName)) : []
    );

    const handleExtractSubjectDetails = () => {
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
    };
    const [subjectId, currentSubject] = useMemo(handleExtractSubjectDetails,
        [subjectName]);

    useEffect(() => {
        const handleFetchAllExperiments = async () => {
            try {
                dispatch(showLoading(true));
                const allExperiments = await fetchAllExperiments(subjectId);
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
    }, [dispatch, experiments.length, subjectId, subjectName])

    const handleReset = () => {
        setReset(!reset);
        setError(false);
    }

    const ExperimentsContainer = () => {
        return (
            <Grid container></Grid>
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
                        onClick={() => navigate(-1)}
                    >
                        Go back
                    </Link>
                </Box>
                {
                    experiments.length > 0 && !error ? <ExperimentsContainer /> :
                        error ? <ExperimentsError /> : <ExperimentsLoading />
                }
            </Container>
        </Box>
    )
}

export default AllExperiments;