'use strict';

module.exports = async function (fastify, opts) {
  const { authenticateUser } = fastify.authControllers;

  fastify.post('/auth', {
    handler: authenticateUser,
    schema: {
      body: {
        type: 'object',
        required: ['password'],
        additionalProperties: false,
        properties: {
          username: { type: 'string' },
          password: { type: 'string' },
          email: { type: 'string' }
        }
      },
      response: {
        '200': {
          type: 'object',
          properties: {
            token: { type: 'string' },
            _id: { type: 'string' },
            username: { type: 'string' },
            email: { type: 'string' }
          }
        }
      }
    }
  });
};