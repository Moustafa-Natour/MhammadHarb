const express = require('express');
const router = require('express').Router();
const schemas = require('../models/schemas');

router.get('/users', async (req, res) => {
    const users = schemas.Users
    const userData = await users.find({}).exec()
    if (userData) {
        res.send(JSON.stringify(userData))
    }
})

router.post('/users', async (req, res) => {
    const { name, email, phoneNumber, role } = req.body;
    const userData = { name: name, email: email, phoneNumber: phoneNumber, role: role };
    const newUser = new schemas.Users(userData);
    const saveUser = await newUser.save();
    if (saveUser) {
        res.send('User saved.Thank you');
    } else {
        res.send('Could not upload, Please try again later');
    }
    res.end();
})


router.post('/images', async (req, res) => {
    const { name, caption, imgUrl } = req.body;
    const imageData = { name: name, caption: caption, imgUrl: imgUrl };
    const newImage = new schemas.Images(imageData);
    const saveImage = await newImage.save();
    if (saveImage) {
        res.send('Image uploaded.Thank you');
    } else {
        res.send('Could not upload, Please try again later');
    }
    res.end();
})


router.post('/bookings', async (req, res) => {
    const { name, date, service, phone } = req.body;
    const bookingData = { name: name, date: date, service: service, phone: phone };
    const newBooking = new schemas.Bookings(bookingData);
    const saveBooking = await newBooking.save();
    if (saveBooking) {
        res.send('Data Successfully Submited.Thank you');
    } else {
        res.send('Could not upload, Please try again later');
    }
    res.end();
})


module.exports = router;