const express = require('express');
const dotenv = require('dotenv');
const { errorHandler } = require('./middleware/errorMiddleware');

dotenv.config();

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', require('./routes/goalRoutes'));

app.use(errorHandler)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});