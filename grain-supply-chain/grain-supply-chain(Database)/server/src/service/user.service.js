const UserModel = require('../model/user.model');

// The business module is responsible for the interaction with the server and the database//Houyuan
class UserService {
    static User = UserModel;
    
    static createUser = async (input,callback) => { //create user
        const ins = new UserModel(input)
        ins.save(callback)
    };

    static findOne = async (input,callback) => { //Find a single user
        UserModel.findOne(input,callback)
    }
}

module.exports = UserService;//Houyuan