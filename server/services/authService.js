const User = require("../models/user.model")
const jwt = require('jsonwebtoken');

const authenticateUser = async (action, user) => {
    // Here we will check for the existence of the user based on sign-in or sign-up logic
    let existingUser = await User.findOne({ oauthId: user.id })
    if (action === 'login') {
        if (!existingUser) {
            throw new Error("User account not found !")
        }
    } else if (action === 'register') {
        if (existingUser) {
            throw new Error("User account already exist !")
        }
        existingUser = await User.create({
            oauthId: user.id,
            email: user.emails && user.emails.length > 0 ? user.emails[0].value : null,
            picture: user.photos && user.photos.length > 0 ? user.photos[0].value : null,
            location: user._json.location ? user._json.location : null,
            auth_provider: user.provider
        });
    }

    return {
        token: generateToken(existingUser),
        user: {
            email: existingUser.email,
            picture: existingUser.picture
        }
    };
}

// Function to generate JWT token
const generateToken = (user) => {
    return jwt.sign(
        { id: user.oauthId, email: user.email, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '2h' }
    );
};

module.exports = { authenticateUser };