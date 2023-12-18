import React, { useEffect, useState, useContext } from 'react';
import { Card, CardMedia, Typography, Grid, IconButton, Stack, Container } from '@mui/material';
import '../constants/font.css';
import colors from '../constants/colors';
import AddImageModal from './AddImageModal';
import UserContext from './UserContext'
import axios from 'axios';
import { baseURL } from '../constants/constant';
import List from './List';
import Carousal from './Carousal';

const Home = () => {
    const { isUserLoggedIn, user } = useContext(UserContext);
    const [data, setData] = useState([]);
    const [updateUI, setUpdateUI] = useState(false);

    useEffect(() => {
        // Fetch data only once when the component mounts
        const fetchData = async () => {
            try {
                const response = await axios.get(`${baseURL}/getImages`);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const updateMode = (id, text) => {
        console.log(id, " cap: ", text);
    };
    return (
        <>
            <Container fixed>
                {/* <Stack m={2} direction='row'>
                    <Typography align='center' variant='h6' sx={{ flexGrow: 1, fontFamily: 'BlackOpsOne', color: colors.custPrimary, }}>
                        Our Work
                    </Typography>
                    {isUserLoggedIn && <IconButton edge='end' sx={{ align: 'right' }}>
                        <AddImageModal setUpdateUI={setUpdateUI} />
                    </IconButton>}
                </Stack> */}
                <Carousal
                    data={data}
                />

                {/* <Grid container spacing={2}>
                    {data.map(image => (
                        <List
                            key={image._id}
                            id={image._id}
                            data={image}
                            setUpdateUI={setUpdateUI}
                            updateMode={updateMode}
                        />
                    ))}
                </Grid> */}
                {/* <Card sx={{ width: '100%', borderRadius: '15px', overflow: 'hidden', mt: 4 }}>
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
                </Card> */}
            </Container >
        </>
    );
};

export default Home;
