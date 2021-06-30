const express = require('express');
const path = require('path');
const router = express.Router();
const { ensureAuth } = require('../middleware/auth');


// Should handle all game page related routes...

// @route   GET /game
// @desc    Main game page

router.get('/', ensureAuth, (req, res) => {
    res.render('game');
});

module.exports = router;