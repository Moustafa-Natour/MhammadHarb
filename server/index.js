const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// const router = require('./routes/router');
const userRoutes = require('./routes/UserRoute');
const imageRoutes = require('./routes/ImageRoute');
const bookingRoutes = require('./routes/BookingRoute');
const mongoose = require('mongoose');
require('dotenv/config');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
    credentials: true
};
app.use(cors(corsOptions));
// Routes & MongoDb
app.use("/api", imageRoutes, userRoutes, bookingRoutes);
const dbOptions = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(process.env.DB_URI, dbOptions)
    .then(() => console.log('Mongo Database Successfully Connected'))
    .catch(err => console.log(err));
const port = process.env.PORT;


const server = app.listen(port, () => {
    console.log("Server is running on : ", port);
})