const droneService = require('../services/DroneService');

class DroneController {
    constructor(){
        
    }

    async index(req, res) {
        const { page = 1 } = req.query;
        const drones = await droneService.findAll(page);
        return res.json(drones);
    }

    async show(req, res) {
        const name = req.params.id;
        let drone = await droneService.findDroneByName(name);
        if (!drone) {
            return res.status(400).send('Drone não cadastrado');
        }
        return res.json(drone);
    }

    async store(req, res) {
        const { name } = req.body
        let drone = await droneService.findDroneByName(name);
        if (drone) {
            return res.status(400).send('Drone já cadastrado');
        }
        drone = await droneService.createDrone(req.body)
        return res.status(201).json(drone);
    }

    async update(req, res) {
        const name = req.params.id;
        let drone = await droneService.findDroneByName(name);
        if (!drone) {
            return res.status(400).send('Drone não cadastrado');
        }
        drone = await droneService.findByIdAndUpdate(drone._id, req.body, { new: true });
        return res.json(drone);
    }

    async destroy(req, res) {
        const name = req.params.id;
        let drone = await droneService.findDroneByName(name)
        if (!name) {
            return res.status(400).send('Drone não cadastrado');
        }

        drone = await droneService.findByIdAndRemove(drone._id);
        return res.send();
    }
}

module.exports = new DroneController()