import React from 'react';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import {
    Typography,
    TextField,
    FormControlLabel,
    Checkbox,
    Button
} from '@mui/material';
import { useAuth } from './auth';

const SignupForm = ({ setRegister }) => {
    const { createClientUser } = useAuth();

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            acceptTerms: false,
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().required('Required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Required'),
            acceptTerms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
        }),
        onSubmit: values => {
            console.log('Form submitted:', values);
            createClientUser(values.name, values.email, values.password);
        },
    });

    return (
        <>
            <Typography variant='h3'>Sign Up</Typography>
            <Typography variant='caption' gutterBottom>Please fill this form to create an account!</Typography>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    label='Name'
                    placeholder="Enter your name"
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
                    label='Email'
                    placeholder="Enter your email"
                    name='email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                    <Typography color='error'>{formik.errors.email}</Typography>
                ) : null}

                {/* <TextField
                    fullWidth
                    label='Phone Number'
                    placeholder="Enter your phone number"
                    name='phoneNumber'
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                    <Typography color='error'>{formik.errors.phoneNumber}</Typography>
                ) : null} */}

                <TextField
                    fullWidth
                    label='Password'
                    placeholder="Enter your password"
                    name='password'
                    type='password'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password ? (
                    <Typography color='error'>{formik.errors.password}</Typography>
                ) : null}

                <TextField
                    fullWidth
                    label='Confirm Password'
                    placeholder="Confirm your password"
                    name='confirmPassword'
                    type='password'
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                    <Typography color='error'>{formik.errors.confirmPassword}</Typography>
                ) : null}
                <FormControlLabel
                    control={<Checkbox name="acceptTerms" checked={formik.values.acceptTerms} onChange={formik.handleChange} />}
                    label="I accept the terms and conditions."
                />
                {formik.touched.acceptTerms && formik.errors.acceptTerms ? (
                    <Typography color='error'>{formik.errors.acceptTerms}</Typography>
                ) : null}

                <Button type='submit' variant='contained' color='primary'>
                    Sign up
                </Button>
                <Typography > Do you have an account ?
                    <Link onClick={() => setRegister(false)} sx={{ color: 'inherit' }} >
                        Login
                    </Link>
                </Typography>
            </form>
        </>
    );
};

export default SignupForm;
