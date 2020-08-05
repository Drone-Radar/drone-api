const mongoose = require('mongoose')
var Drone = require('../models/Drone')

class DroneService {
    constructor(){
        
    }
    async findOne(query) {
        return await Drone.findOne(query)
    }

    async find(query, page) {
        return await Drone.paginate(query, { page, limit:10 })
    }

    async findAll(page) {
        return await Drone.find()
    }
    
    async createDrone(drone){
        return await Drone.create(drone)
    }
    
    async findByIdAndRemove(id){
        return await Drone.findByIdAndRemove(id);
    }

    async findByIdAndUpdate(id, drone){
        return await Drone.findByIdAndUpdate(id, drone, { new: true })
    }

    async findDroneByName(name) {
        return await Drone.findOne({name: name})
    }

    async findByTracking(condiction) {
        return await Drone.find({tracking : condiction})
    }

}

module.exports = new DroneService()