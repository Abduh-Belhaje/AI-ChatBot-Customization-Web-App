const { GoogleGenerativeAI } = require("@google/generative-ai");

// Initialize the Google Gemini API
const apiKey = process.env.GEMINI_API_KEY; // Use environment variables for sensitive data
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });


const sendMessage = async (query) => {
    // Get Data from Redis
    const prompt = `You're sam and you're a helpful assitant .
        query: ${query}`;
    const result = await model.generateContent(prompt);
    return result.response.text();
}

module.exports = {sendMessage};