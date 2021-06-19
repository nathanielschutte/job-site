const express = require('express');
const { model } = require('mongoose');
const router = express.Router();

// GET /
router.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname, 'public', 'index.html'));
    res.render('index.html');
});

// GET /game
router.get('/game', (req, res) => {
    
});

// GET /unknown
router.get('*', (req, res) => {
    res.send('Jobsite: Page does not exist!');
});

module.exports = router;