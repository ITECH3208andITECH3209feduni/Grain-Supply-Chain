const UserService = require('../service/user.service');
const { serverErrorHandler,successHandler } = require('../utils/result');
// Responsible for the interaction between the server and the front end//Houyuan
class UserController {
  static registerHandler = async (req, res) => { //Register api
    const {
      username,
      password,
      nickname
    } = req.body;
    const credentials = {
      username,
      password,
      nickname
    };
    // First search the database to see if the user name already exists, to avoid the situation that the user name is the same
    UserService.findOne({
      username
    }, (err, user) => {
      if (err) {
        serverErrorHandler(res,err)
      };
      if (user) {
        successHandler(res,{msg: "user already exists"})
      } else { //Create a user if the user name is not the same
        UserService.createUser(credentials, (err, _newUser) => {
          if (err) serverErrorHandler(res,err);
          successHandler(res,{msg: "registration success"})
        });
      }
    });
  }

  static loginHandler = async ( //login api
    req, res
  ) => {
    const { username, password } = req.body;
    UserService.findOne({ username }, (err, user) => { //Find users by username
      if (err) {
        serverErrorHandler(res, err)
      }
      if (user) {
        user.validatePassword(password, async (err, isMatch) => { //Verify password if user exists
          if (err) {
            serverErrorHandler(res, err)
          }
          if (!isMatch) { //Check if the passwords match
            successHandler(res,{ msg: "wrong password" },{
              code: 20003
            })
          } else {
            successHandler(res,{ msg: "login successful", nickname: user.nickname,username: user.username })
          }
        });
      } else {
        successHandler(res,{ msg: "User does not exist, please register first" },{
          code: 20001
        })
      }
    })
  }
}

module.exports = UserController;//Houyuan
