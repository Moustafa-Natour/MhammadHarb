const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create the schema for a user
const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, },
    role: { type: String, },
    entryDate: { type: Date, default: Date.now }
});

const imageSchema = new Schema({
    name: { type: String, required: true },
    caption: { type: String, required: true },
    imgUrl: { type: String, required: true },
    entryDate: { type: Date, default: Date.now }
});
const bookingSchema = new Schema({
    name: { type: String, required: true },
    date: { type: String, required: true },
    service: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    entryDate: { type: Date, default: Date.now }
});

const Users = mongoose.model('Users', userSchema, 'users');
const Images = mongoose.model('Images', imageSchema, 'images');
const Bookings = mongoose.model('Bookings', bookingSchema, 'bookings');
const MySchemas = { 'Users': Users, 'Images': Images, 'Bookings': Bookings };

module.exports = MySchemas;