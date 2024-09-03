const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 3001;
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});
app.use('/api/contacts', require('./routes/contactRoutes'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});