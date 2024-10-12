const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

/**
 * @swagger
 * /auth/google/login:
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
 * /auth/google/register:
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

/**
 * @swagger
 * /auth/github/login:
 *   get:
 *     summary: login using Github OAuth
 *     description: Initiates the Github OAuth flow for signing in a user.
 *     tags:
 *       - Authentication
 *     responses:
 *       200:
 *         description: Successfull authentication
 *       401:
 *         description: Authentication failed
 */
router.get("/github/login", authController.githubSignIn);

/**
 * @swagger
 * /auth/github/register:
 *   get:
 *     summary: Register using Github OAuth
 *     description: Initiates the Github OAuth flow for signing up a new user.
 *     tags:
 *       - Authentication
 *     responses:
 *       200:
 *         description: Successfull authentication
 *       401:
 *         description: Authentication failed
 */
router.get("/github/register", authController.githubSignUp);

router.get("/google/callback", authController.googleCallback);

router.get("/github/callback", authController.githubCallback);

module.exports = router;
