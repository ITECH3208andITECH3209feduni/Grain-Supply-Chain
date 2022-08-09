const policyService = require("../service/policy.service");
const { successHandler,serverErrorHandler } = require('../utils/result');

class PolicyController {
    static createPolicyHandler(req,res){ //Create a policy
        const policyInput = req.body;
        policyService.findOne({title: policyInput.title},(err,_policy) => {
            if(err) {
                serverErrorHandler(res,err)
            }
            if(_policy) {
                successHandler(res,{ msg: "This title already exists, please change the title" })
            } else {
                policyService.createPolicy(policyInput,(err,policy) => {
                    if(err) {
                        serverErrorHandler(res,err)
                    }
                    successHandler(res,{ policy },{
                        msg: "pPolicy created successfully"
                    })
                })
            }
        })
    }

    static searchPolicyHandler(req,res) { //Query policy
        const { describe } = req.query;
        policyService.findOne({describe},(err,policy) => {
            if(err) {
                serverErrorHandler(res,err)
            }
            //Return different data depending on the query result
            policy? successHandler(res,{ policy }) : successHandler(res,{ msg: "The data you are looking for is empty" });
        })
    }
}

module.exports = PolicyController;