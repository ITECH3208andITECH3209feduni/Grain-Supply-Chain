const PolicyModel = require('../model/policy.model');

class PolicyService {
    static Policy = PolicyModel;
    static createPolicy = async (input,callback) => { //create policy
        const ins = new PolicyModel(input)
        ins.save(callback)
    };

    static findOne = async (input,callback) => { //Find a single policy
        PolicyModel.findOne(input,callback)
    }
}

module.exports = PolicyService;