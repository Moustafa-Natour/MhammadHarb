import React from 'react';
import { Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const serviceDetails = [
    {
        category: 'Makeup with Mhammad Harb',
        services: [
            { title: 'Full Glam', price: '$150' },
            { title: 'Editorial', price: '$200' },
            { title: 'Engagement / Katb Kitab', price: '$300' },
            { title: 'Bridal Glam', price: '$400' },
            { title: 'Bridal Package (Bride + Bridesmaid)', price: '$500' },
        ],
    },
    {
        category: 'Out services',
        services: [
            { title: 'Beirut', price: 'Service x2' },
            { title: 'Outside Beirut', price: 'Service x3' },
            { title: 'Abroad', price: 'Service x4' },
        ],
    },
    {
        category: 'Makeup with the Team',
        services: [
            { title: 'Full Glam', price: '$100' },
            { title: 'Engagment', price: '$150' },
            { title: 'Bridal', price: '$200' },
        ],
    },
    {
        category: 'Extra services',
        services: [
            { title: 'Eyes Makeup', price: '$50' },
            { title: 'False Eyelashes Application', price: '$20' },
        ],
    },
    {
        category: 'Makeup Courses',
        services: [
            { title: 'Auto Makeup Course', price: '$1000' },
            { title: 'Beginners Course', price: '$1500' },
            { title: 'Pro Course', price: '$2000' },
        ],
    },
    {
        category: 'PMU Price List by Mhammad Harb',
        services: [
            { title: 'Nano Needling Technique; Eyebrows: Hair by Hair', price: '$600 (2 Sessions)' },
            { title: 'Eyebrows: Refresh', price: '$300 (1 Session)' },
            { title: 'Eyebrows: Powder Shadowing', price: '$300 (1 Session)' },
            { title: 'Eyebrows: Refresh Powder', price: '$150 (1 Session)' },
            { title: 'Lip Blush', price: '$400 (2 Sessions)' },
            { title: 'Lip Blush: Refresh', price: '$200 (1 Session)' },
            { title: 'Lip Lining', price: '$300' },
            { title: 'Lip Lining: Refresh', price: '$150 (1 Session)' },
            { title: 'Eyeliner', price: '$200 (1 Session)' },
            { title: 'Eyeliner: Refresh', price: '$100 (1 Session)' },
        ],
    },
    {
        category: 'Price List Beauty Services',
        services: [
            { title: 'Permanent Lashes - Full Set', price: '$100' },
            { title: 'Permanent Lashes - Refill', price: '$35' },
            { title: 'Lash Lifting & Tinting', price: '$35' },
            { title: 'Eyebrow Lamination', price: '$30' },
            { title: 'Eyebrows Reshaping', price: '$5' },
        ],
    },
];

const Services = () => {
    return (
        <Grid container spacing={3}>
            {serviceDetails.map((category, index) => (
                <Grid item xs={12} key={index}>
                    <Typography variant="h4" gutterBottom style={{ marginBottom: '1rem' }}>
                        {category.category}
                    </Typography>
                    <Grid container spacing={3}>
                        {category.services.map((service, serviceIndex) => (
                            <Grid item xs={12} sm={6} md={4} key={serviceIndex}>
                                <Card sx={{
                                    borderRadius: '15px',
                                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                                    transition: 'transform 0.2s',
                                    overflow: 'hidden',
                                    '&:hover': {
                                        transform: 'scale(1.03)',
                                    },
                                }}>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        // Replace 'url_to_your_image' with the actual image URL
                                        image="url_to_your_image"
                                        alt={service.title}
                                        sx={{ backgroundSize: 'contain' }}
                                    />
                                    <CardContent>
                                        <Typography variant="h6">{service.title}</Typography>
                                        <Typography variant="body2">{`Price: ${service.price}`}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            ))}
        </Grid>
    );
};

export default Services;
