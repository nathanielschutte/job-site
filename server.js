const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');
const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const connectDB = require('./config/db');


// Config
dotenv.config({path: './config/.env'});
require('./config/passport')(passport);

connectDB();

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

// Renderer
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: 'hbs'}));
app.set('view engine', '.hbs');


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
});