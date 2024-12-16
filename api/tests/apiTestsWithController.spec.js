 
/* eslint-disable no-undef */
const UserController = require('../controllers/UserController');
const PostController = require('../controllers/PostController');
const users = require('../test-data/users');
const ToDoController = require('../controllers/ToDoController');
const CommentController = require('../controllers/CommentController');
const comments = require('../test-data/comments');

describe('User tests', () => {
	test('Get all users', async () => {
		const response = await UserController.getAllUsers();
		expect(response.status).toBe(200);
		expect(Array.isArray(response.data)).toBe(true);
		expect(response.data.length).toBeGreaterThan(0);
	});

	test('Get a user by Id', async () => {
		const response = await UserController.getUserById(users[7].id);
		expect(response.status).toBe(200);
		expect(response.data.id).toBe(users[7].id);
		expect(response.data.username).toBe(users[7].username);
		expect(response.data).toHaveProperty('email');
	});
});

describe('Post tests', () => {
	test('Add new post', async () => {
		const post = {
			userId: '1',
			title: 'testTitle1',
			body: 'testBody1',
		};

		const response = await PostController.addNewPost(post);
		expect(response.status).toBe(201);
		expect(response.data.title).toBe(post.title);
		expect(response.data.body).toBe(post.body);
	});
});

describe('TODO tests', () => {
	test('Get the list of all TODOs', async () => {
		const response = await ToDoController.getAllTODOs();
		expect(response.status).toBe(200);
		expect(Array.isArray(response.data)).toBe(true);
		expect(response.data.length).toBeGreaterThan(1);
	});
});

describe('Comment tests', () => {
	test('Create new comment', async () => {
		const newComment = {
			postId: 1,
			name: 'Oleksii Test',
			email: 'oleksiiKud@google.com',
			body: 'Test Comment',
		};

		const response = await CommentController.addNewComment(newComment);
		expect(response.status).toBe(201);
		expect(response.data).toMatchObject(newComment);
	});

    test('Get a comment by id', async () => {
		const response = await CommentController.getCommentById(1);
		expect(response.status).toBe(200);
		expect(response.data).toMatchObject(comments[0]);
	});

	test('Delete a comment by id', async () => {
		const response = await CommentController.deleteCommentById(1);
		expect(response.status).toBe(200);
		expect(response.data).not.toMatchObject(comments[0]);
	});
});
