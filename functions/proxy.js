const axios = require('axios');

exports.handler = async function(event, context) {
    const { url } = event.queryStringParameters; // Get the URL parameter from the query string

    if (!url) {
        return {
            statusCode: 400,
            body: 'No URL provided'
        };
    }

    try {
        // Fetch the URL's content using Axios
        const response = await axios.get(url);
        return {
            statusCode: 200,
            body: JSON.stringify({ content: response.data })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: 'Error fetching the URL'
        };
    }
};
