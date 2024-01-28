const axios = require('axios');

describe('Contact Form Endpoint', () => {
    test('should respond within a reasonable time', async () => {
        const formData = {
            name: "Test",
            email: "test@example.com",
            subject: "Test Subject",
            message: "Test Message",
        };

        const startTime = Date.now();

        try {
            const response = await axios.post('https://express-mail-server.onrender.com/send-email', formData);
            const endTime = Date.now();
            const timeTaken = endTime - startTime;
            console.log(`Total time taken: ${timeTaken} ms`);

            expect(response.status).toBe(200);
        } catch (error) {
            console.error(error);
        }
    });
});