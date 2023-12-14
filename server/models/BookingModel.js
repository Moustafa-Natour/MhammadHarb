const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    date: { type: String, required: true },
    service: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    entryDate: { type: Date, default: Date.now }
});
module.exports = mongoose.model("Bookings", bookingSchema);