const express = require('express');
const router = express.Router();
const { ensureAuth, ensureGuest } = require('../middleware/auth');

const PAGE_TODO = 'page does not yet exist! go to /game';

// @route   GET /
router.get('/', ensureGuest, (req, res) => {
    let msg = '';
    if (req.query.failedAuth && req.query.failedAuth == 'true') {
        msg = 'Unable to continue as guest!';
    }
    
    // TODO: render this route

    res.send(PAGE_TODO);
});


// @route   GET /home
router.get('/home', ensureAuth, (req, res) => {
    
    // TODO: render this route

    res.send(PAGE_TODO);
});


// // GET /unknown
// router.get('*', (req, res) => {
//     res.send('Jobsite: Page does not exist!');
// });

module.exports = router;