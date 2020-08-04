const express = require('express')
const mongoose = require('mongoose');
const cors= require('cors');
const requireDir = require('require-dir');
const swaggerUi = require('swagger-ui-express');
const specs = require('./app/doc/swaggerDef');
const amqpService = require('./app/services/AmqpService');

class AppController{
    constructor(){
        const app = express()
        app.use(express.json())
        app.use(cors());

        require('dotenv/config');

        this.database()        
        requireDir('./app/models');

        amqpService.start();

        app.use('/api', require('./routes'))

        app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

        return app
    }

    database(){
        mongoose.connect(process.env.MONGODB_CONNECTIONSTRING,
            { 
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );
        
    }
}

module.exports = new AppController()