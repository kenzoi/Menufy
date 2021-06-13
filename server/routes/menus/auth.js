'use strict';

module.exports = async function (fastify, opts) {

  fastify.post('/auth', {
    handler: () => 'works',
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
            menu: { type: 'array' }
          }
        }
      }
    }
  });
};