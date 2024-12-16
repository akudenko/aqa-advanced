/* eslint-disable no-undef */
const BaseController = require('./BaseController');

class PostController extends BaseController {
	async addNewPost(post) {
		return await this.axiosInstance.post('/posts', post, { headers: { 'Content-Type': 'application/json' } });
	}

	async getPostById(id) {
        return await this.axiosInstance.get(`/posts/${id}`);
    }

	async addNewPostWithWrongData(post) {
		return await this.axiosInstance.post('/invalidURL', post);
	}

	async getPostWithCustomHeaders(headers, params) {
		return await this.axiosInstance.get(`/posts/${params.id}`, { headers });
	}
}

module.exports = new PostController();
