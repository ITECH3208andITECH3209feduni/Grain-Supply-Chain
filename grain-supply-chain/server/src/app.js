const express = require('express');
const cors = require('cors'); //Cross-domain configuration
const config = require('../config'); //import configuration
const routesHandler = require('./routes'); //import routing table
const logger = require('./utils/logger'); //log beautification
const connect = require('./utils/connect'); //Connect to the database
const bodyParser = require('body-parser');

//Houyuan
class Server {
    constructor() {
        this.app = express();
        this.bindMiddleware(this.app);
        this.routesInitialize(this.app);
        this.start();
    }

    bindMiddleware(app) { //Middleware mount, the middleware mounted globally will process all requests accordingly
        app.use(cors()) //Configure cross domain；
        app.use(bodyParser.json())// Request parameter formatting
        app.use(express.json()); //Configure the json engine
        app.set("port",config.server.port); //mount port
    }

    routesInitialize(app) { //Initialize route
        routesHandler(app)
    }

    start() { //Start the service
        const app = this.app; 
        app.listen(app.get("port"), //listening port
        async () => {
            try {
                logger.info(`Server listening on ${config.server.baseUrl}`)
                await connect();//Create a connection to the database while starting the service
            } catch(e) {
                logger.error(`Service failed to start: \n` + e);
            }
        })
    }
}

new Server() //Start the service//Houyuan