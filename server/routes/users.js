'use strict';

module.exports = async function (fastify) {
  await fastify.register(require('../controllers/users'));
  const { registerUser } = fastify.usersController;

  fastify.post('/users', {
    handler: registerUser,
    schema: {
      body: {
        type: 'object',
        required: ['username', 'password', 'email', 'restaurantName'],
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