const passport = require('passport');
const authService = require("../services/authService")

// Google Sign In action
exports.googleSignIn = (req, res, next) => {
    passport.authenticate('google', { scope: ['profile', 'email'] , state: 'login'})(req, res, next);
};

// Google Sign Up action
exports.googleSignUp = (req, res, next) => {
    passport.authenticate('google', { scope: ['profile', 'email'] , state: 'register' })(req, res, next);
};

// Callback after Google authentication
exports.googleCallback = (req, res, next) => {
    passport.authenticate('google', { session: false, failureRedirect: '/' }, async (err, user, info) => {
        if (err || !user) {
            return res.status(401).json({ error: 'Authentication failed. Please try again.' });
        }
        try {
            const resp = await authService.authenticateUser(req.query.state, user);
            res.redirect(`${process.env.CLIENT_APP_URl}/success?resp=${resp}`); 
        } catch (error) {
            res.redirect(`${process.env.CLIENT_APP_URl}/failure?err=${error.message}`); 
        }

    })(req, res, next);
};

