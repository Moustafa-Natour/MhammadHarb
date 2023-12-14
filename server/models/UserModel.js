const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, },
    role: { type: String, },
    entryDate: { type: Date, default: Date.now }
});


module.exports = mongoose.model("Users", userSchema);