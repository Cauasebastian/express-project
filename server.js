const express = require('express');
require('dotenv').config();
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./config/dbConnection');

const port =  process.env.PORT || 5000;
connectDB();
const app = express();

app.use(express.json());
app.use(errorHandler);

app.get('/', (req, res) => {
    res.send('Hello World');
});
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/contacts', require('./routes/contactRoutes'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});