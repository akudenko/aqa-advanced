const axios = require('axios');
const PostController = require('../controllers/PostController');
const MockAdapter = require('axios-mock-adapter');


// task 1

test('Error handling', async () => {
	const post = {
		userId: '1',
		title: 'testTitle1',
		body: 'testBody1',
	};

	const response = await PostController.addNewPostWithWrongData(post);

	expect(response.status).toBe(404);
	expect(response.statusText).toBe('Not Found');
});

// task 2
test('Header and params in request', async () => {
    const headers = {
        'Content-Type': 'application/json',
    };

    const params = {
        id: '51',
    };

    const response = await PostController.getPostWithCustomHeaders(headers, params);
    expect(response.data.id).toBe(51);
    expect(response.status).toBe(200);
});
