const User = require("../models/user.model")
const jwt = require('jsonwebtoken');

const authenticateUser = async (action, user) => {
    // Here we will check for the existence of the user based on sign-in or sign-up logic
    let existingUser = await User.findOne({ googleId: user.id })
    
    if (action === 'login') {
        if (!existingUser) {
            throw new Error("User account not found !")
        }
    } else if (action === 'register') {
        if (existingUser) {
            throw new Error("User account already exist !")
        }
        existingUser = await User.create({
            googleId: user.id,
            email: user.emails[0]?.value,
            name: user.displayName,
            picture: user.photos[0]?.value
        });
        
    }
    
    return {
        token: generateToken(existingUser),
        user: {
            email: existingUser.email,
            name: existingUser.name,
            picture: existingUser.picture
        }
    };
}

// Function to generate JWT token
const generateToken = (user) => {
    return jwt.sign(
        { id: user._id , email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN }
    );
};

module.exports = { authenticateUser };