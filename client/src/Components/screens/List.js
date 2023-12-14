import React from 'react';
import axios from 'axios';
import { baseURL } from '../constants/constant';
import colors from '../constants/colors';
import { Box, Card, CardMedia, Typography, CardContent, Grid } from '@mui/material';
import { collection, getDocs } from "firebase/firestore";
import { imgDataDb } from '../constants/firebase';
const List = ({ id, data, setUpdateUI, updateMode }) => {

    const customStyles = {
        border: '1px solid #746653',
        borderRadius: '3rem',
        overflow: 'hidden',
        boxShadow: '0 2px 20px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'transform 200ms ease-in',
        height: '100%', // Set a fixed height
        '&:hover': {
            transform: 'scale(1.04)',
        },
    };

    // const getFbStorageData = async () => {
    //     const valRef = collection(imgDataDb, 'Images');
    //     const dataDb = await getDocs(valRef);
    //     const allData = dataDb.docs.map(val => ({ ...val.data(), id: val.id }));
    //     setData(allData);
    // };

    const deleteItem = () => {
        axios.delete(`${baseURL}/deleteImage/${id}`).then((res) => {
            console.log('deleted image');
            setUpdateUI((prevState) => !prevState);
        });
    };


    return (
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box p={2}>
                <Card sx={customStyles}>
                    <CardMedia
                        component='img'
                        height='100%'
                        loading="lazy"
                        image={data.imgUrl}
                        alt={'Image Loading'}
                        sx={{ objectFit: 'cover' }}
                        onClick={() => updateMode(id, data.caption)}
                    />
                    <CardContent sx={{ p: 2 }}>
                        <Typography variant='body2' sx={{ fontFamily: 'Play', color: colors.custPrimary }} gutterBottom>
                            {data.caption}
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Grid>
    );
};

export default List;