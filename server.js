const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');
const express = require('express');

dotenv.config({path: './config/.env'});

// Database connection
//const connectDB = require('./config/db');
//connectDB();

// Express app
const app = express();

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', require('./routes/index'));


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
});