const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT;
const { errorHandler } = require('./Middleware/errorMiddleware');
const app = express();
const colors = require('colors');
const connectDB = require('./config/db');

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', require('./routes/goalRoutes'));

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});