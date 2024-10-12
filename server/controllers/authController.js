const passport = require("passport");
const authService = require("../services/authService");

/********************** Oauth via google ***************************/

// Google Sign In action
exports.googleSignIn = (req, res, next) => {
    passport.authenticate("google", {
        scope: ["profile", "email"],
        state: "login",
    })(req, res, next);
};

// Google Sign Up action
exports.googleSignUp = (req, res, next) => {
    passport.authenticate("google", {
        scope: ["profile", "email"],
        state: "register",
    })(req, res, next);
};

// Callback after Google/Github authentication
exports.googleCallback = (req, res, next) => {
    passport.authenticate(
        "google",
        { session: false, failureRedirect: "/" },
        (err, user, info) => handleAuth(req, res, next, err, user, info)
    )(req, res, next);
};

/********************** Oauth via github ***************************/

// Github Sign In action
exports.githubSignIn = (req, res, next) => {
    passport.authenticate("github", {
        scope: ["profile", "email"],
        state: "login",
    })(req, res, next);
};

// Github Sign Up action
exports.githubSignUp = (req, res, next) => {
    passport.authenticate("github", {
        scope: ["profile", "email"],
        state: "register",
    })(req, res, next);
};

// Callback after GitHub authentication
exports.githubCallback = (req, res, next) => {
    passport.authenticate(
        "github",
        { session: false, failureRedirect: "/" },
        (err, user, info) => handleAuth(req, res, next, err, user, info)
    )(req, res, next);
};

/********************** Helper Function ***************************/

const handleAuth = async (req, res, next, err, user, info) => {
    if (err || !user) {
        return res.status(401).json({
            error: "Authentication failed. Please try again.",
        });
    }
    try {
        
        const resp = await authService.authenticateUser(req.query.state, user);
        const respString = encodeURIComponent(JSON.stringify(resp));
        res.redirect(
            `${process.env.CLIENT_APP_URl}/success?action=${req.query.state}&resp=${respString}`
        );
    } catch (error) {
        console.log(error.message)
        res.redirect(
            `${process.env.CLIENT_APP_URl}/failure?err=${encodeURIComponent(error.message)}`
        );
    }
};
