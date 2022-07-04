const PolicyController = require('../../controller/policy.controller');
const validate = require('../../middleware/validateResource');
const { policySchema,searchPolicySchema } = require('../../schema/policy.schema');

const policyRoutesHandler = (app) => {
    app
    .route('/api/policy')
    .get(validate(searchPolicySchema),PolicyController.searchPolicyHandler) //Get requests for queries
    .post(validate(policySchema),PolicyController.createPolicyHandler)  //post request for creation
}

module.exports = policyRoutesHandler;