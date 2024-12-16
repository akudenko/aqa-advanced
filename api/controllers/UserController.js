/* eslint-disable no-undef */
const BaseController = require("./BaseController");

class UserController extends BaseController{
    async getAllUsers(){
        return await this.axiosInstance.get('/users');
    }

    async getUserById(userId){
        return await this.axiosInstance.get(`/users/${userId}`)
    }
}

module.exports = new UserController();