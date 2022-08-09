const { object,string } = require('zod');
//Houyuan
const userSchema = object({ //Specifies the parameter format of the login interface
    body: object({
        username: string({
            required_error: "Missing username field"
        })
        .min(5, { message: "Username length cannot be less than 5" })
        .max(10, { message: "Username length cannot be greater than 10" }),
        password: string({
            required_error: "Missing password field"
        })
        .min(5, { message: "Password length cannot be less than 5" })
        .max(10, { message: "Password length cannot be greater than 10" }),
    })
})//Houyuan

const registerUserSchema = object({ //Specifies the parameter format of the registration interface
    body: object({
        nickname: string({
            required_error: "Missing nickname field"
        }).min(1, { message: "Nickname length cannot be less than 1" })
        .max(10, { message: "Nickname length cannot be greater than 10" }),
        username: string({
            required_error: "Missing username field"
        }).min(5, { message: "Username length cannot be less than 5" })
        .max(10, { message: "Username length cannot be greater than 10" }),
        password: string({
            required_error: "Missing password field"
        }).min(5, { message: "Password length cannot be less than 5" })
        .max(10, { message: "Password length cannot be greater than 10" }),
    })
})

module.exports = {
    userSchema,
    registerUserSchema
};//Houyuan