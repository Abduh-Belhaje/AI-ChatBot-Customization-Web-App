const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const protectRoute = require('../middlewares/jwtMiddleware');

/**
 * @swagger
 * /users/updateInfo:
 *   put:
 *     summary: Update user information
 *     description: Update the current user's profile information. This route requires authentication.
 *     tags:
 *       - Users
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               full_name:
 *                 type: string
 *                 description: The full name of the user
 *               email:
 *                 type: string
 *                 description: The email address of the user (must be unique)
 *               auth_provider:
 *                 type: string
 *                 description: The authentication provider (e.g., Google, GitHub)
 *               role:
 *                 type: string
 *                 enum: [ADMIN, USER]
 *                 default: USER
 *                 description: The role of the user
 *               job_profile:
 *                 type: string
 *                 description: The job profile of the user
 *               picture:
 *                 type: string
 *                 description: The user's profile picture URL
 *               heard_about_us:
 *                 type: string
 *                 description: How the user heard about the platform
 *               business_name:
 *                 type: string
 *                 description: The business name of the user, if applicable
 *               business_type:
 *                 type: string
 *                 description: The business type of the user, if applicable
 *               department:
 *                 type: string
 *                 description: The department the user works in, if applicable
 *               app_utilisation:
 *                 type: string
 *                 description: How the user plans to utilize the app
 *               location:
 *                 type: string
 *                 description: The location of the user
 *     responses:
 *       200:
 *         description: User information updated successfully
 *       400:
 *         description: Bad request, invalid input
 *       401:
 *         description: Unauthorized, token required
 *       500:
 *         description: Internal server error
 */

router.put("/updateInfo" , protectRoute , userController.updateInfo)

module.exports = router;