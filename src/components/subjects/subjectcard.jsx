/**
 * Subject Card Component
 */

// Dependencies
import React from 'react';
import { useNavigate } from 'react-router-dom';

// MUI
import { Card, CardActions, CardContent, Button, Typography, Divider } from '@mui/material';

const SubjectCard = ({ name, description, _id }) => {
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
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default SubjectCard