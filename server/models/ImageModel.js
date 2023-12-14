const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    caption: { type: String, required: true },
    imgUrl: { type: String, required: true },
    entryDate: { type: Date, default: Date.now }
});
module.exports = mongoose.model("Images", imageSchema);