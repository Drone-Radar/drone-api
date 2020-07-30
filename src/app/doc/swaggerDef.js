require('dotenv/config');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
      openapi: "3.0.0",
      info: {
        title: "Drone API",
        version: "1.0.0",
        description:  "API para gerenciamento de drones",
        license: {
          name: "MIT",
          url: "https://choosealicense.com/licenses/mit/"
        },
        contact: {
          name: "Swagger",
          url: "https://swagger.io",
          email: "Info@SmartBear.com"
        }
      },
      servers: [
        {
          url: `/api/`
        }
      ]
    },
    apis: ['./src/routes.js', './src/app/models/*.js']
  };


module.exports = swaggerJsdoc(options);
