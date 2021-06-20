const express = require('express');
const router = express.Router();
const { ensureAuth } = require('../middleware/auth');


// Should handle all game page related routes...

// @route   GET /game
// @desc    Main game page
router.get('/game', ensureAuth, (req, res) => {
    res.render('game', {
        layout: "game-layout",
        pageName: "On the Job"
    });
});

module.exports = router;