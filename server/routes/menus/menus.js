'use strict';

module.exports = async function (fastify) {
  const { registerMenu } = fastify.menusControllers;

  fastify.post('/', {
    handler: registerMenu,
    schema: {
      body: {
        type: 'object',
        required: ['username', 'password', 'email', 'restaurantName'],
        additionalProperties: false,
        properties: {
          username: { type: 'string' },
          password: { type: 'string' },
          email: { type: 'string' },
          restaurantName: { type: 'string' }
        }
      },
      response: {
        '201': {
          type: 'object',
          properties: {
            _id: { type: 'string' },
            username: { type: 'string' },
            email: { type: 'string' },
            restaurantName: { type: 'string' }
          }
        }
      }
    }
  });
};