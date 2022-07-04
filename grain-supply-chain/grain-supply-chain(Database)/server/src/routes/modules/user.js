const UserController = require('../../controller/user.controller');
const validate = require('../../middleware/validateResource');
const { userSchema,registerUserSchema } = require('../../schema/user.schema');

const userRoutesHandler = (app) => {
     // 用户注册
     app
     .route('/api/register')
     .post(validate(registerUserSchema),UserController.registerHandler) //validate函数的作用是请求接口之前进行接口参数格式的验证
 
     // 用户登录
     app
     .route('/api/login')
     .post(validate(userSchema),UserController.loginHandler)
}

module.exports = userRoutesHandler;