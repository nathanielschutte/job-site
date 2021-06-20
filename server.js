const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');
const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const connectDB = require('./config/db');

// Config
dotenv.config({path: './config/.env'});

connectDB();

// Express app
const app = express();

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', require('./routes/index'));

// Renderer
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: 'hbs'}));
app.set('view engine', '.hbs');


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
});