/* eslint-disable no-console */
/* eslint-disable no-undef */
const axios = require('axios');

const BASE_URL = 'https://jsonplaceholder.typicode.com';

describe('API Tests for JSONPlaceholder', () => {
    test('GET a list of users', async () => {
        const response = await axios.get(`${BASE_URL}/users`);
        expect(response.status).toBe(200); 
        expect(Array.isArray(response.data)).toBe(true); 
        expect(response.data.length).toBeGreaterThan(0);
    });

    test('GET a certain user', async () => {
        const response = await axios.get(`${BASE_URL}/users/8`);
        expect(response.status).toBe(200);
        expect(response.data.id).toBe(8); 
        expect(response.data.username).toBe('Maxime_Nienow'); 
        expect(response.data).toHaveProperty('email');
    });

    test('POST create the new post', async () => {
        const response = await axios.post(`${BASE_URL}/posts`, {
            'userId': '1',
            'title': 'testTitle1',
            'body': 'testBody1',
            headers: { 'Content-Type': 'application/json' },
        });
        expect(response.status).toBe(201); 
        expect(response.data.title).toBe('testTitle1');
        expect(response.data.body).toBe('testBody1');
    });

    test('GET the todo list', async () => {
        const response = await axios.get(`${BASE_URL}/todos`);
        expect(response.status).toBe(200);
        expect(Array.isArray(response.data)).toBe(true);
        expect(response.data.length).toBeGreaterThan(1); 
    });

    test('POST /comments - should create a new comment', async () => {
        const newComment = { postId: 1, name: 'Oleksii Test', email: 'oleksiiKud@google.com', body: 'Test Comment' };
        const response = await axios.post(`${BASE_URL}/comments`, newComment, {
            headers: { 'Content-Type': 'application/json' },
        });
        expect(response.status).toBe(201); 
        expect(response.data).toMatchObject(newComment); 
    });
});