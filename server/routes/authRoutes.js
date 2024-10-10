const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

/**
 * @swagger
 * /google/login:
 *   get:
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
router.get("/google/login", authController.googleSignIn);

/**
 * @swagger
 * /google/register:
 *   get:
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
router.get("/google/register", authController.googleSignUp);

router.get("/google/callback", authController.googleCallback);

module.exports = router;
