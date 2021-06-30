const express = require('express');
const router = express.Router();
const { ensureAuth, ensureGuest } = require('../middleware/auth');

// @route   GET /
router.get('/', ensureGuest, (req, res) => {
    let msg = '';
    if (req.query.failedAuth && req.query.failedAuth == 'true') {
        msg = 'Unable to continue as guest!';
    }
    
    // TODO: render this route
});


// @route   GET /home
router.get('/home', ensureAuth, (req, res) => {
    
    // TODO: render this route
});


// // GET /unknown
// router.get('*', (req, res) => {
//     res.send('Jobsite: Page does not exist!');
// });

module.exports = router;