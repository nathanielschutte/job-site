module.exports ={
    ensureAuth: function (req, res, next) {
        if (req.isAuthenticated() || process.env.GUEST_OK == 'true') {
            return next();
        }
        else {
            console.log(req.query.guest);
            if (req.query.guest && req.query.guest == 'true') {
                res.redirect('/?failedAuth=true');
            }
            else {
                res.redirect('/');
            }
        }
    },

    ensureGuest: function (req, res, next) {
        if (req.isAuthenticated()) {
            res.redirect('/dashboard');
        }
        else {
            return next();
        }
    }
}