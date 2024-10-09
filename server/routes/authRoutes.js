const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const User = require("../models/user.model")

/**
 * @swagger
 * /google/login:
 *   post:
 *     summary: login using Google OAuth
 *     description: Initiates the Google OAuth flow for signing in a user.
 *     tags:
 *       - Authentication
 *     responses:
 *       200:
 *         description: Successfull authentication
 *       401:
 *         description: Authentication failed
 */
router.post('/google/login', authController.googleSignIn);


/**
 * @swagger
 * /google/register:
 *   post:
 *     summary: Register using Google OAuth
 *     description: Initiates the Google OAuth flow for signing up a new user.
 *     tags:
 *       - Authentication
 *     responses:
 *       200:
 *         description: Successfull authentication
 *       401:
 *         description: Authentication failed
 */
router.post('/google/register', authController.googleSignUp);

router.get('/google/callback', authController.googleCallback);



module.exports = router;
