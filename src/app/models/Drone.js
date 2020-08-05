const mongoose = require('mongoose')

//Criando o DroneSchema 

/**
 * @swagger
 * components:
 *  schemas:
 *      Drone:
 *        type: object
 *        properties:
 *          name:
 *              type: string
 *          latitude:
 *              type: number
 *          longitude:
 *              type: number
 *          temperature:
 *              type: number
 *          humidity:
 *              type: number
 *          tracking:
 *              type: boolean
 *        required:
 *          - name
 *          - latitude
 *          - longitude
 *          - temperature
 *          - humidity
 *          - tracking
 *          
 */
const DroneSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    latitude:{
        type: Number,
        required: true,
    },
    longitude:{
        type: Number,
        required: true,
    },
    temperature:{
        type: Number,
        required: true,
    },
    humidity:{
        type: Number,
        required: true,
    },
    tracking:{
        type: Boolean,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model('Drone', DroneSchema);