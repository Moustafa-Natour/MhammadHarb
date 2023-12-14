import React from 'react';
import { Card, CardMedia, Typography, Container } from '@mui/material';
import '../constants/font.css';
import colors from '../constants/colors';

function AboutUs() {
    return (
        <Container fixed>
            <Typography varitant='h1' align='center' sx={{ fontSize: '55px', fontFamily: 'BlackOpsOne', color: colors.custPrimary }}>MHAMMAD HARB
            </Typography>
            <Typography variant='h5' align='center' sx={{ ml: 30, fontFamily: 'BlackOpsOne', color: colors.custPrimary }}>Beauty Community</Typography>
            <Typography variant='body' sx={{ fontFamily: 'Play', color: colors.custPrimary }}>
                Founder Mhammad Harb, created his first shop experience called it ’Beauty Community’  to bring beauty from the hands of experts to discerning customers with refined senses and experience, who are looking for international visionary looks, experience & indulge themselves in a out of this world location where all the beauty community has a hub now.
                With expertise, technology and know-how on a professional level as well as world-leading products, we are able to bring our vision to life in a very special location in Beirut Downtown, the capital of Lebanon.
                Beauty Community is a true reflection of the way we envision beauty and provides luxurious, celebrity treatment to all the visitors – high-end beauty experience with a very comfortable approach.
                Throughout the experience we want to slow down the tempo. Making serenity and tranquillity even throughout the busiest days! – and giving our undivided attention and time to slow down, as part of personal consultations and most exclusive beauty treatments; Providing a  Full Beauty Experience through services from the trendiest makeup looks to the most suitable hairstyles, nails and more!
                We understand the beautician profession and upholding its origins: as a craft. And as an art, that combines both technical know-how and medical knowledge, as well as understanding and the correct handling of instruments. As your MH team we guarantee attentiveness and empathy as well as the highest level of expertise and the best products on the market.
                The timelessly minimalistic & futuristic design furnished with custom décor make this spot a must visit for beauty enthusiasts, and the fact that it is led by a beauty and make-up icon truly makes the Beauty Community one of a kind!
            </Typography>
            <Card sx={{ width: '100%', borderRadius: '15px', overflow: 'hidden', my: 4 }}>
                <Typography align='center' variant='h6' sx={{ fontFamily: 'BlackOpsOne', color: colors.custPrimary }}>
                    MHAMMAD HARB Beauty Community Location
                </Typography>
                <CardMedia
                    component="iframe"
                    title="MHAMMAD HARB Beauty Community"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d929.3124497732199!2d35.49638200641263!3d33.89755870069751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f17bb04a0bc6b%3A0x632b042103a8cbad!2sMhammad%20Harb!5e0!3m2!1sen!2slb!4v1693413017086!5m2!1sen!2slb"
                    width="100%"
                    height="600"
                    allowFullScreen=""
                    loading="lazy"
                    sx={{ border: 0 }}
                />
            </Card>
        </Container>
    );
}

export default AboutUs;