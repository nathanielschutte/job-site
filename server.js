const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const connectDB = require('./config/db');


// Config
if (process.env.NODE_ENV == 'dev') {
    dotenv.config({path: './config/.env'});
}
require('./config/passport')(passport);


// Lightweight run for page rendering
const LITE = process.env.LITE == 'true';

if (!LITE) {
    connectDB();
}

// Express app
const app = express();

// Session
app.use(session({
    secret: 'unknown soldier',
    resave: false,
    saveUninitialized: false
}));

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));
app.use('/game', require('./routes/game'));

// Renderer
app.set('view engine', 'ejs');

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
});