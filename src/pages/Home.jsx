/**
 * Home Page
 */

// Dependencies
import React from 'react';
import ReactTyped from 'react-typed';
import { useNavigate } from 'react-router-dom';

// MUI
import { Box, Container, Typography, Tooltip, Button } from '@mui/material';
import { keyframes } from '@mui/material';
import FlagIcon from '@mui/icons-material/Flag';
import BookIcon from '@mui/icons-material/Book';
import MoveDownIcon from '@mui/icons-material/MoveDown';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import ComputerIcon from '@mui/icons-material/Computer';
import MovieIcon from '@mui/icons-material/Movie';
import AttachmentIcon from '@mui/icons-material/Attachment';

// Components
import Navbar from '../components/reusable/navbar';

// Custom
import HomeImage1 from '../assets/home-1.gif';
import HomeImage2 from '../assets/home-2.gif';

const Home = () => {
    const navigate = useNavigate();
    const movement = (num) => {
        const start = num % 2 === 0 ? '18deg' : '-18deg';
        const end = num % 2 === 0 ? '-18deg' : '18deg';
        return keyframes`
        0% {
            transform: rotate(${start});
        }
        50% {
            transform: rotate(${end});
        }
        100% {
            transform: rotate(${start});
        }
    `;
    };

    const objectives = [
        'To provide remote-access to simulation-based Labs in various disciplines of Science and Engineering.',
        'To enthuse students to conduct experiments by arousing their curiosity. This would help them in learning basic and advanced concepts through remote experimentation.',
        'To provide a complete Learning Management System around the Virtual Labs where the students/ teachers can avail the various tools for learning, including additional web-resources, video-lectures, animated demonstrations and self-evaluation.'
    ];

    const features = [
        {
            name: 'Aim',
            Icon: FlagIcon,
        },
        {
            name: 'Theory',
            Icon: BookIcon,
        },
        {
            name: 'Procedure',
            Icon: MoveDownIcon,
        },
        {
            name: 'Observation',
            Icon: ManageSearchIcon,
        },
        {
            name: 'Simulation',
            Icon: ComputerIcon,
        },
        {
            name: 'Videos',
            Icon: MovieIcon,
        },
        {
            name: 'References',
            Icon: AttachmentIcon,
        }
    ]

    return (
        <Box>
            <Navbar />
            <Container
                sx={{
                    padding: '1em',
                }}
            >
                {/* Welcome Box */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                    }}
                >
                    <Box
                        flex={{ sm: 1, md: 0.7 }}
                        px={{ sm: 4 }}
                    >
                        <Typography
                            variant='h6'
                            fontWeight={600}
                        >Welcome to</Typography>
                        <Typography
                            variant='h3'
                            my={1}
                        >
                            <ReactTyped
                                strings={['SRMIST Virtual Lab...']}
                                startDelay={1000}
                                typeSpeed={50}
                            />
                        </Typography>
                        {
                            objectives.map((text, index) => (
                                <Typography
                                    key={index}
                                    variant='subtitle2'
                                    textAlign='justify'
                                >{text}</Typography>
                            ))
                        }
                    </Box>
                    <Box
                        flex={{ sm: 1, md: 0.3 }}
                        display='flex'
                        alignItems='center'
                        justifyContent='center'
                    >
                        <img
                            src={HomeImage1}
                            alt='srmist vlab'
                            style={{
                                width: 'min(400px, 100%)',
                                height: 'auto',
                            }}
                        />
                    </Box>
                </Box>

                {/* Features Box */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '2em',
                        flexWrap: 'wrap',
                        my: { xs: 4 }
                    }}
                >
                    {
                        features.map(({ name, Icon }, index) => (
                            <Tooltip title={name} key={index}>
                                <Icon
                                    sx={{
                                        fontSize: '3rem',
                                        mx: 4,
                                        color: '#063a7e',
                                        cursor: 'pointer',
                                        animation: `${movement(index)} 2s infinite ease`,
                                        borderRadius: '50%',
                                        padding: '.1em',
                                        transition: 'all 200ms',
                                        ':hover': {
                                            backgroundColor: '#063a7e40',
                                        }
                                    }}
                                />
                            </Tooltip>
                        ))
                    }
                </Box>

                {/* CTA Box */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: { sm: 'center' },
                        flexWrap: 'wrap',
                        flexDirection: 'row-reverse'
                    }}
                >
                    <Box
                        flex={{ sm: 1, md: 0.7 }}
                        px={{ sm: 4 }}
                        mx='auto'
                    >
                        <Typography
                            variant='h6'
                            fontWeight={600}
                        >Looking for more?</Typography>
                        <Typography
                            variant='h4'
                            my={1}
                        >
                            <ReactTyped
                                strings={['Explore VLab now!']}
                                typeSpeed={50}
                                startDelay={1500}
                            />
                        </Typography>
                        <Button
                            variant='contained'
                            onClick={() => navigate('/subjects')}
                        >Get Started</Button>
                    </Box>
                    <Box
                        flex={{ sm: 1, md: 0.3 }}
                        display='flex'
                        alignItems='center'
                        justifyContent='center'
                    >
                        <img
                            src={HomeImage2}
                            alt='srmist vlab'
                            style={{
                                width: 'min(400px, 100%)',
                                height: 'auto',
                            }}
                        />
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Home;