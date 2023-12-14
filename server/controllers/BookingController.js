const BookingModel = require('../models/BookingModel');

module.exports.getBookings = async (req, res) => {
    const bookings = await BookingModel.find();
    res.send(bookings);
};

module.exports.saveBooking = (req, res) => {
    const { Booking } = req.body;
    BookingModel.create(Booking).then((data) => {
        console.log("Saved Successfully ", data);
        res.status(201).send(data);
    }).catch((err) => {
        console.log(err);
        res.send({ error: err, msg: "Something went wrong!" });
    });
};

module.exports.updateBooking = (req, res) => {
    const { id } = req.params;
    const { Booking } = req.body;
    BookingModel.findByIdAndUpdate(id, { Booking })
        .then(() => {
            res.send("Updated successfully");
        })
        .catch((err) => {
            console.log(err);
            res.send({ error: err, msg: "Something went wrong!" });
        });
};

module.exports.deleteBooking = (req, res) => {
    const { id } = req.params;
    BookingModel.findByIdAndDelete(id)
        .then(() => {
            res.send("Deleted successfully");
        })
        .catch((err) => {
            console.log(err);
            res.send({ error: err, msg: "Something went wrong!" });
        });
};