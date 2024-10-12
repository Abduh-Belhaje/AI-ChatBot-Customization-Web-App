const express = require("express");
const router = express.Router();
const aiController = require("../controllers/aiController");


router.post("/send-prompt", aiController.sendPrompt)

module.exports = router;