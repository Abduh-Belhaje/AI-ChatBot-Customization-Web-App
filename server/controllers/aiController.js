const aiService = require("../services/aiService");

exports.sendPrompt = async (req, res) => {
    try {
        const response = await aiService.sendMessage(req.body); // Call the function
        res.json({ response: response }); // Wrap the response in an object for better clarity
    } catch (error) {
        res.status(500).send(`Operation failed: ${error.message}`);
    }
};
