/* eslint-disable no-undef */
const BaseController = require('./BaseController');

class CommentController extends BaseController {
	async addNewComment(comment) {
		return await this.axiosInstance.post('/comments', comment, { headers: { 'Content-Type': 'application/json' }});
	}

    async getCommentById(id){
        return await this.axiosInstance.get(`/comments/${id}`);
    }

    async deleteCommentById(id){
        return await this.axiosInstance.delete(`/comments/${id}`);
    }
}

module.exports = new CommentController();
