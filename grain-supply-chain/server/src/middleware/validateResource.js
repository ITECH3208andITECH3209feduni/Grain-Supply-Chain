//To verify the middleware of the request format, we can load the appropriate interface for verification, and intercept if the format is not correct, reducing the request to the database
const logger = require('../utils/logger'); //Beautify the output log//Houyuan
const validate = ( schema ) => ( 
    req,res,next
) => {
    try {
        schema.parse({
            body: req.body,
            params: req.params,
            query: req.query
        })

        next()
    } catch(e) {
        // logger.error("wrong request format:\n" + e);
        res.status(403).json({
            code: 40000,
            data: {
                msg: e.issues[0].message || "Information format error", 
            }
        })
    }
}

module.exports = validate;//Houyuan