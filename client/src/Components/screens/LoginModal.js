import React, { useState } from 'react';
import Modal from 'react-modal';
import '../css/LoginModal.css';
import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsApple } from "react-icons/bs";
import { useAuth } from './auth';
import { Button, Grid, TextField, Typography, Link, Container } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import SignupForm from './SignupForm';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
// import PhoneOtp from './PhoneOtp';


const colors = {
    custPrimary: "#26261F",
    custSecondary: "#746653",
    custTertiary: "#806554",
    custQuaternary: "#CABF83",
    custBackground: "#F0EFEA"
};
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const LoginModal = ({ isOpen, onRequestClose, onLogin }) => {
    const { loginWithGoogle, loginWithFacebook } = useAuth();
    const [register, setRegister] = useState(false);
    const initialValues = {
        email: '',
        password: ''
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('please enter valid email').required("Required"),
        password: Yup.string().required("Required")
    })


    const handleSubmit = (values, props) => {
        onLogin(values.email, values.password).then((response) => {
            console.log(response);
            if (response) {
                setTimeout(() => {
                    props.resetForm()
                    props.setSubmitting(false)
                }, 2000)
                onRequestClose();
            }
        }).catch((error) => {
            console.log(error);
        })
    };

    const handleGoogleLogin = (e) => {
        e.preventDefault();
        loginWithGoogle().then((res) => {
            onRequestClose();
        }).catch((error) => {
            console.log(error);
        })
    };

    const handleFacebookLogin = (e) => {
        e.preventDefault();
        loginWithFacebook().then((res) => {
            onRequestClose();
        }).catch((err) => {
            console.log(err);
        })

    };

    const handleRegister = () => {
        setRegister(true);
        console.info('Register state: ', register);
    }

    function LoginView() {
        return (
            <Container fixed>
                <Typography variant='h3' >Login</Typography>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    {(props) => (
                        <Form>
                            <Field as={TextField}
                                variant="outlined"
                                name='email'
                                type='email'
                                label='Email'
                                size='small'
                                helperText={<ErrorMessage name="email" />}
                                required
                            />
                            <Field as={TextField}
                                variant="outlined"
                                name="password"
                                type='password'
                                label='Password'
                                size='small'
                                helperText={<ErrorMessage name="password" />}
                                required
                            />
                            <Button disabled={props.isSubmitting} type="submit" variant='contained' sx={{ bgcolor: colors.custSecondary }}>Login</Button>
                            <Typography > Do not have an account ?
                                <Link onClick={handleRegister} sx={{ color: 'inherit' }} >
                                    Sign Up
                                </Link>
                            </Typography>
                        </Form>
                    )}
                </Formik>
            </Container>
        )


    }

    return (
        <Grid spacing={5} m={2} direction='column'>
            <Modal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                style={customStyles}
                contentLabel="Login"
                className="custom-modal"
            >
                {register ? <SignupForm setRegister={setRegister} /> : <LoginView />}

                <Typography variant='h4'>
                    Login Using
                </Typography>

                <FcGoogle title="Google" size={22} onClick={handleGoogleLogin} />
                <BsFacebook title="Facebook" size={22} color="#0047AB" onClick={handleFacebookLogin} />
                <BsApple title="Apple" color="white" size={22} />
            </Modal >
        </Grid>
    );
};

export default LoginModal;
