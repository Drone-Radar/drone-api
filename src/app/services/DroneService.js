const mongoose = require('mongoose')
const Drone = mongoose.model('Drone');

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
        return await Drone.paginate({}, { page, limit:10 })
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
}

module.exports = new DroneService()