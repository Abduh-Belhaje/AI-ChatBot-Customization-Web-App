const { GoogleGenerativeAI } = require("@google/generative-ai");

// Initialize the Google Gemini API
const apiKey = process.env.GEMINI_API_KEY; // Use environment variables for sensitive data
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

const sendMessage = async (query) => {
    const prompt = `You're sam and you're a helpful assitant .
        query: ${query}`;
    const result = await model.generateContent(prompt);
    return result.response.text();
}
module.exports = {sendMessage};