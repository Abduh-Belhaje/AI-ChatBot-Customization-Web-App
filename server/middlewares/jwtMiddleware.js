const jwt = require('jsonwebtoken');

// Middleware to verify JWT and extract user info
const protectRoute = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1]; // Extract token from Authorization header
    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        // Verify the JWT token
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // JWT_SECRET should be stored in env variables

        // Attach user information to the request object
        req.user = {
            id: decoded.id,
            email: decoded.email,
            role: decoded.role,
        };

        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        res.status(400).json({ message: `Invalid token : ${error.message}` });
    }
};

module.exports = protectRoute;
