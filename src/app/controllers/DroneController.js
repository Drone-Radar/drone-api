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
        const name = req.params.name;
        let drone = await droneService.findDroneByName(name);
        if (!drone) {
            return res.status(400).send('Drone não cadastrado');
        }
        return res.json(drone);
    }

    async store(req, res) {

        const { name } = req.body
        const { temperature } = req.body
        const { humidity } = req.body
        const { latitude } = req.body
        const { longitude } = req.body

        let drone = await droneService.findDroneByName(name);
        if (drone) { return res.status(400).send('Drone com este nome já está cadastrado'); }

        if ((temperature < -25) || (temperature > 40)) { return res.status(400).send('Temperatura inválida. Deve estar entre -25 e 40'); }
        if ((humidity < 0) || (humidity > 100)) { return res.status(400).send('Umidade inválida. Deve estar entre 0 e 100.'); }
        if ((latitude < -90) || (latitude > 90)) { return res.status(400).send('Latitude inválida. Deve estar entre -90 e 90.'); }
        if ((longitude < -180) || (longitude > 180)) { return res.status(400).send('Longitude inválida. Deve estar entre -180 e 180.'); }

        drone = await droneService.createDrone(req.body)
        return res.status(201).json(drone);

    }

    async update(req, res) {

        const name = req.params.name;
        const { temperature } = req.body
        const { humidity } = req.body
        const { latitude } = req.body
        const { longitude } = req.body

        let drone = await droneService.findDroneByName(name);
        if (!drone) { return res.status(400).send('Drone com este nome não está cadastrado'); }
        if ((temperature < -25) || (temperature > 40)) { return res.status(400).send('Temperatura inválida. Deve estar entre -25 e 40'); }
        if ((humidity < 0) || (humidity > 100)) { return res.status(400).send('Umidade inválida. Deve estar entre 0 e 100.'); }
        if ((latitude < -90) || (latitude > 90)) { return res.status(400).send('Latitude inválida. Deve estar entre -90 e 90.'); }
        if ((longitude < -180) || (longitude > 180)) { return res.status(400).send('Longitude inválida. Deve estar entre -180 e 180.'); }

        drone = await droneService.findByIdAndUpdate(drone._id, req.body, { new: true });
        return res.json(drone);
    }

    async destroy(req, res) {
        const name = req.params.name;
        let drone = await droneService.findDroneByName(name)
        if (!name) {
            return res.status(400).send('Drone com este nome não está cadastrado');
        }

        drone = await droneService.findByIdAndRemove(drone._id);
        return res.send();
    }

}

module.exports = new DroneController()