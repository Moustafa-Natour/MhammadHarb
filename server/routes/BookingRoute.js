const { Router } = require('express');
const { getBookings, saveBooking, updateBooking, deleteBooking } = require('../controllers/BookingController');
const router = Router();
router.get("/getBookings", getBookings);
router.post("/saveBooking", saveBooking);
router.put("/updateBooking/:id", updateBooking);
router.delete("/deleteBooking/:id", deleteBooking);
module.exports = router;
