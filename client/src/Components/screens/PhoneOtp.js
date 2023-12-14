import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../constants/firebase';
import {
    Typography,
    Button,
    TextField
} from '@mui/material';

const PhoneOtp = () => {
    const [phone, setPhone] = useState("");
    const [user, setUser] = useState(null);
    const [otp, setOtp] = useState("");

    const sendOtp = async () => {
        try {
            let recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha", {});
            const confirmation = await signInWithPhoneNumber(auth, phone, recaptchaVerifier)
            setUser(confirmation);
        }
        catch (err) {
            console.log(err);
        }
    }

    const verifyOtp = async () => {
        try {
            const data = await user.confirm(otp);
            console.log(data);
        }
        catch (err) {
            console.log(err);
        }
    }


    return (
        <>
            <Typography variant='h3'>Sign up with phone number</Typography>
            <PhoneInput
                country={'lb'}
                autoFormat={true}
                enableSearch={true}
                value={phone}
                onChange={(phone) => setPhone("+" + phone)}
            />
            <Button onClick={sendOtp} sx={{ marginTop: "10px" }} variant='contained'>Send OTP</Button>
            <div id="recaptcha" sx={{ marginTop: "10px" }} ></div>
            <TextField onChange={(e) => setOtp(e.target.value)} sx={{ marginTop: "10px", width: "300px" }} variant='outlined' size='small' label="Enter OTP"> </TextField>
            <Button onClick={verifyOtp} sx={{ marginTop: "10px" }} variant='contained' color='success'>Verify OTP</Button>
        </>

    )
}

export default PhoneOtp;