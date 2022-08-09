const { object,string } = require('zod');

const policySchema = object({ //Specify the parameter format of the policy interface
    body: object({
        describe: string({
            required_error: "Missing describe field"
        })
        .min(5, { message: "Description length cannot be less than 5" })
        .max(50, { message: "Description length cannot be greater than 50" }),
        url: string({
            required_error: "Missing url field"
        })
        .url({ message: "url is invalid" }),
        tag: string({
            required_error: "Missing tag field"
        })
        .min(1, { message: "Label length cannot be less than 1" })
        .max(10, { message: "Label length cannot be greater than 10" }),
        title: string({
            required_error: "Missing title field"
        })
        .min(1, { message: "Title length cannot be less than 1" })
        .max(30, { message: "Title length cannot be greater than 30" })
    })
})

const searchPolicySchema = object({ //Specifies the parameters of the policy query interface
    query: object({
        describe: string({
            required_error: "Missing describe field"
        })
    })
})

module.exports = {
    searchPolicySchema,
    policySchema
};