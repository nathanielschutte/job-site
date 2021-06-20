const express = require('express');
const router = express.Router();

// GET / 
router.get('/', (req, res) => {
    res.render('dashboard', {
        layout: 'main-layout'
    });
});

// GET /game
router.get('/game', (req, res) => {
    res.render('game', {
        layout: "game-layout"
    });
});

// GET /unknown
router.get('*', (req, res) => {
    res.send('Jobsite: Page does not exist!');
});

module.exports = router;