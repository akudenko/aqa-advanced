/* eslint-disable no-undef */
const BaseController = require('./BaseController');

class ToDoController extends BaseController {
	async getAllTODOs() {
		return await this.axiosInstance.get('/todos');
	}
}

module.exports = new ToDoController();
