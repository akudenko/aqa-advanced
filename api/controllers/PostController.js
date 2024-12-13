/* eslint-disable no-undef */
const BaseController = require('./BaseController');

class PostController extends BaseController {
	async addNewPost(post) {
		return await this.axiosInstance.post('/posts', post, { headers: { 'Content-Type': 'application/json' }});
	}
}

module.exports = new PostController();
