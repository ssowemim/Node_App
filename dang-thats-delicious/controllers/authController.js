const passport = require('passport');

exports.login = passport.authenticate('local', {
    failureRedirect: '/login',
    failureFlash: 'Failed Login!',
    successFlash: 'You are now logged in!',
    successRedirect: '/'
});

exports.logout = (req, res) => {
    req.logOut();
    req.flash('success', 'You are now logged out!');
    res.redirect('/');
}

exports.isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
        return;
    }
    req.flash('error', 'Oops you must be logged in!');
    res.redirect('/login');
}