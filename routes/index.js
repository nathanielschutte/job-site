const express = require('express');
const router = express.Router();
const { ensureAuth, ensureGuest } = require('../middleware/auth');

// @route   GET /
router.get('/', ensureGuest, (req, res) => {
    let msg = '';
    if (req.query.failedAuth && req.query.failedAuth == 'true') {
        msg = 'Unable to continue as guest!';
    }
    res.render('login', {
        layout: 'login-layout',
        message: msg
    });
});


// @route   GET /home
router.get('/home', ensureAuth, (req, res) => {
    res.render('home', {
        layout: 'main-layout',
        pageName: "Jobsite"
    });
});

// @route   GET /game
router.get('/game', ensureAuth, (req, res) => {
    res.render('game', {
        layout: "game-layout",
        pageName: "On the Job"
    });
});

// // GET /unknown
// router.get('*', (req, res) => {
//     res.send('Jobsite: Page does not exist!');
// });

module.exports = router;