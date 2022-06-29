/**
 * Experiment Card Component
 */

// Dependencies
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// MUI
import { Card, CardActions, CardContent, Button, Typography, Divider, Tooltip } from '@mui/material';

const ExperimentCard = ({ name, description, slug, _id }) => {
    const navigate = useNavigate();
    const { subjectName } = useParams();

    const handleNavigateToExperiment = () => {
        const experimentPath = `${_id}--${slug}`
        navigate(`/${subjectName}/experiments/${experimentPath}`);
    }

    return (
        <Card
            sx={{
                minHeight: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}
            elevation={3}
        >
            <CardContent>
                <Typography
                    variant='h6'
                    fontWeight={600}
                    mb={1}
                >
                    {name}
                </Typography>
                <Divider />
                <Typography
                    variant='body1'
                    mt={1}
                >
                    {description}
                </Typography>
            </CardContent>
            <CardActions
                sx={{
                    mt: 'auto',
                }}
            >
                <Tooltip
                    title={`Explore ${name}`}
                    placement='right-end'
                >
                    <Button
                        size="small"
                        onClick={handleNavigateToExperiment}
                    >
                        Learn More
                    </Button>
                </Tooltip>
            </CardActions>
        </Card>
    )
}

export default ExperimentCard;