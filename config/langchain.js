// langchain.js
require('dotenv').config();
const axios = require('axios');

const langchainApiKey = process.env.LANGCHAIN_API_KEY;
const langchainApiUrl = 'https://api.langchain.com/v1/endpoint'; // replace with the actual endpoint

async function getLangChainResponse(input) {
    try {
        const response = await axios.post(
            langchainApiUrl,
            { input },
            {
                headers: {
                    'Authorization': `Bearer ${langchainApiKey}`,
                    'Content-Type': 'application/json'
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error interacting with LangChain API:', error);
        throw error;
    }
}

module.exports = { getLangChainResponse };
