const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger definition
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'My REST API',
    version: '1.0.0',
    description: 'API documentation for my REST API',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Local server',
    },
  ],
};

// Options for the swagger docs
const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.js'], // Path to the API docs
};

// Initialize swagger-jsdoc
const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };
