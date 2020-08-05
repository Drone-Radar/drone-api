const routes = require('express').Router()
const DroneController = require('./app/controllers/DroneController')

/**
 * @swagger
 * path:
 *  /drones/:
 *    get:
 *      tags:
 *          - Drones
 *      summary: Lista de Drones
 *           
 *      responses:
 *        "200":
 *          description: Ok
 *          content:
 *            application/json:
 *              schema:
 *                  $ref: '#/components/schemas/Drone'
 *               
 */
routes.get('/drones', DroneController.index)

/**
 * @swagger
 * path:
 *  /drones/{name}:
 *    get:
 *      tags:
 *          - Drones
 *      summary: Drone por name
 * 
 *      parameters:
 *          - name: name
 *            in: path
 *            description: Name do Drone
 *            required: true
 *            schema:
 *              type: string
 *           
 *      responses:
 *        "200":
 *          description: Ok
 *          content:
 *            application/json:
 *              schema:
 *                  $ref: '#/components/schemas/Drone'
 */
routes.get('/drones/:name',DroneController.show);

/**
 * @swagger
 * path:
 *  /drones/:
 *    post:
 *      tags:
 *          - Drones
 *      summary: Adiciona um Drone
 *
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Drone'
 *           
 *      responses:
 *        "200":
 *          description: Ok
 *          content:
 *            application/json:
 *              schema:
 *                  $ref: '#/components/schemas/Drone'
 *       
 *        "500":
 *          description: Erro        
 */
routes.post('/drones', DroneController.store);

/**
 * @swagger
 * path:
 *  /drones/{name}:
 *    put:
 *      tags:
 *          - Drones
 * 
 *      summary: Altera um Drone
 * 
 *      parameters:
 *          - name: name
 *            in: path
 *            description: Name do Drone
 *            required: true
 *            schema:
 *              type: string
 *
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Drone'
 *           
 *      responses:
 *        "200":
 *          description: Ok
 *          content:
 *            application/json:
 *              schema:
 *                  $ref: '#/components/schemas/Drone'
 *       
 *        "500":
 *          description: Erro        
 */
routes.put('/drones/:name',DroneController.update);

/**
 * @swagger
 * path:
 *  /drones/{name}:
 *    delete:
 *      tags:
 *          - Drones
 * 
 *      summary: Deleta um Drone
 * 
 *      parameters:
 *          - name: name
 *            in: path
 *            description: Name do Drone
 *            required: true
 *            schema:
 *              type: string
 *
 *      responses:
 *        "200":
 *          description: Ok
  *          content:
 *            application/json:
 *              schema:
 *                  $ref: '#/components/schemas/Drone'
 *       
 *        "500":
 *          description: Erro        
 */
routes.delete('/drones/:name', DroneController.destroy);

module.exports = routes