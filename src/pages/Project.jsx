/**
 * Project Page
 */

// Dependencies
import React from 'react';

// MUI
import { Box, Container, Divider, Grid, Typography, Card, CardContent, CardActions, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

// Components
import Navbar from '../components/reusable/navbar';

const Project = () => {
    return (
        <Box>
            <Navbar />
            <Container
                sx={{
                    padding: '1em',
                }}
            >
                <Box
                    display='flex'
                    justifyContent='center'
                    flexDirection='column'
                    gap={2}
                >
                    <Typography
                        variant='h4'
                    >
                        Philosophy
                    </Typography>
                    <Divider />
                    <Typography
                        textAlign='justify'
                        letterSpacing={1.5}
                    >
                        Good lab facilities and updated lab experiments are critical for any engineering college. Paucity of lab facilities often make it difficult to conduct experiments. Also, good teachers are always a scarce resource. The Virtual Labs project addresses this issue of lack of good lab facilities, as well as trained teachers, by providing remote-access to simulation-based Labs in various disciplines of science and engineering. Yet another objective is to arouse the curiosity of the students and permit them to learn at their own pace. This student-centric approach facilitates the absorption of basic and advanced concepts through simulation-based experimentation. Internet-based experimentation further permits use of additional web-resources, video-lectures, animated demonstrations and self-evaluation.
                    </Typography>
                </Box>
                <Grid container spacing={2} mt={4}>
                    <Grid item xs={12} sm={6}>
                        <Card sx={{ minWidth: 275 }} elevation={3}>
                            <CardContent
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: 1
                                }}
                            >
                                <GitHubIcon
                                    sx={{
                                        margin: '0 auto',
                                        fontSize: '2rem',
                                    }}
                                />
                                <Typography variant='h6'>VLab is Open Source!</Typography>
                                <Typography variant='subtitle2'>Feel like something can be improved in terms of better UI, smoother functionality, or optimization? Take a look at the GitHub repo below and contribute to this project.</Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    variant='outlined'
                                    target='_blank'
                                    href='https://github.com/srmistprojects/SRMIST-Vlab-Client'
                                    fullWidth
                                >Client Repo</Button>
                                <Button
                                    variant='outlined'
                                    target='_blank'
                                    href='https://github.com/srmistprojects/SRMIST-Vlab-Service'
                                    fullWidth
                                >Service Repo</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card sx={{ minWidth: 275 }} elevation={3}>
                            <CardContent
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: 1
                                }}
                            >
                                <EmailIcon
                                    sx={{
                                        margin: '0 auto',
                                        fontSize: '2rem',
                                    }}
                                />
                                <Typography variant='h6'>Contact Us.</Typography>
                                <Typography variant='subtitle2'>If there's some error in any experiment or any information is incorrect, reach out to us, we'll get back to you soon!</Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    variant='outlined'
                                    target='_blank'
                                    href='mailto:srmistprojects@gmail.com'
                                    sx={{
                                        margin: '0 auto'
                                    }}
                                >Send Email</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Project;