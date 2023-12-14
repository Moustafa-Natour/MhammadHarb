import React, { useState } from 'react';
import { styled, Box, Button, Typography, TextField, Modal, Card, CardMedia } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { imgDataDb, imageDb } from '../constants/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import axios from "axios";
import { baseURL } from '../constants/constant';

function AddImageModal({ setUpdateUI }) {
    const [img, setImg] = useState('');
    const [uploadedImg, setUploadedImg] = useState(false);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => { setOpen(true); };
    const handleClose = () => { setOpen(false); };
    const handleUpload = (e) => {
        const imgs = ref(imageDb, `images/${e.target.files[0].name}`);
        uploadBytes(imgs, e.target.files[0]).then(data => {
            getDownloadURL(data.ref).then(val => {
                setImg(val);
                setUploadedImg(true);
            })
        })
    }
    const formik = useFormik({
        initialValues: {
            name: '',
            caption: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required'),
            caption: Yup.string().required('Required'),
        }),
        onSubmit: values => {
            const valRef = collection(imgDataDb, 'Images');
            addDoc(valRef, { name: values.name, caption: values.caption, imgUrl: img });
            addImage(values.name, values.caption, img);
            formik.resetForm();
            setImg('');
            handleClose();
        },
    });

    const addImage = (name, caption, imgUrl) => {
        const data = {
            name: name,
            caption: caption,
            imgUrl: imgUrl,
        }
        axios.post(`${baseURL}/saveImage`, { Image: data }).then(res => {
            console.log('axios res', res);
            setUpdateUI((prevState) => !prevState);
        })
            .catch(err => {
                console.log(err);
            });
    }


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });

    return (
        <div>
            <Button onClick={handleOpen} component="label" variant="contained" startIcon={<CloudUploadIcon />} >
                Upload Image
                <VisuallyHiddenInput type="file" onChange={(e) => { handleUpload(e) }} />
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {uploadedImg && (
                        <Card>
                            <CardMedia
                                component='img'
                                height='100%'
                                loading="lazy"
                                image={img}
                                alt={'Added image'}
                                sx={{ objectFit: 'cover' }}
                            />
                        </Card>
                    )}
                    <form onSubmit={formik.handleSubmit}>
                        <TextField
                            fullWidth
                            label='Name'
                            placeholder="Enter image name"
                            name='name'
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.name && formik.errors.name ? (
                            <Typography color='error'>{formik.errors.name}</Typography>
                        ) : null}
                        <TextField
                            fullWidth
                            label='Caption'
                            placeholder="Enter image caption"
                            name='caption'
                            value={formik.values.caption}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.caption && formik.errors.caption ? (
                            <Typography color='error'>{formik.errors.caption}</Typography>
                        ) : null}

                        <Button type='submit' variant='contained' color='primary'>
                            Add
                        </Button>
                    </form>

                </Box>
            </Modal>
        </div>
    );

}

export default AddImageModal;