const userRoutesHandler = require('./modules/user');
const policyRoutesHandler = require('./modules/policy');

const routesHandler = (app) => { //Configure the route here
    app // Test the availability of the api
    .route("/api/healthCheck")
    .get((_req,res) => {
        res.status(200).json({
            msg: "health"
        })
    })

   //User api
   userRoutesHandler(app);

   //policy api
   policyRoutesHandler(app);
}

module.exports = routesHandler;