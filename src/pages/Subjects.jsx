/**
 * Subjects Page
 */

// Dependencies
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// MUI
import { Box, Container, Grid, Typography, Link } from '@mui/material';

// Components
import Navbar from '../components/reusable/navbar';
import SubjectCard from '../components/subjects/subjectcard';
import SubjectLoading from '../components/subjects/subjectloading';
import ErrorScreen from '../components/reusable/errorscreen';

// Actions
import { showLoading, showSnackbar } from '../store/features/app';

// Custom
import { fetchAllSubjects } from '../utils/apis';

const Subjects = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [error, setError] = useState(false);
    const [retry, setRetry] = useState(false);
    const [subjects, setSubjects] = useState(
        sessionStorage.getItem('subjects') ? JSON.parse(sessionStorage.getItem('subjects')) : []
    );

    useEffect(() => {
        const handleFetchAllSubjects = async () => {
            try {
                dispatch(showLoading(true));
                const allSubjects = await fetchAllSubjects();
                setSubjects(allSubjects);
                sessionStorage.setItem('subjects', JSON.stringify(allSubjects));
            } catch (error) {
                dispatch(showSnackbar({ message: 'Unable to get subjects, try again later!' }));
                setError(true);
            } finally {
                dispatch(showLoading(false));
            }
        };

        if (subjects.length === 0) handleFetchAllSubjects();
    }, [retry, dispatch, subjects.length]);

    const handleRetry = () => {
        setRetry(!retry);
        setError(false);
    }

    const SubjectsContainer = () => {
        return (
            <Grid container spacing={{ xs: 2, md: 4 }}>
                {
                    subjects.length > 0 && subjects.map((subject) => (
                        <Grid item xs={12} md={6} lg={4} key={subject?.name}>
                            <SubjectCard {...subject} />
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
                        Subjects
                    </Typography>
                    <Link
                        onClick={() => navigate(-1)}
                        variant='button'
                        sx={{ cursor: 'pointer' }}
                    >
                        Go back
                    </Link>
                </Box>
                {
                    subjects.length > 0 && !error ?
                        <SubjectsContainer /> :
                        error ? <ErrorScreen title='There was an issue getting the subjects!' onPress={handleRetry} /> : <SubjectLoading />
                }
            </Container>
        </Box>
    )
}

export default Subjects;