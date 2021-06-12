'use strict';

module.exports = async function (fastify) {
  await fastify.register(require('../controllers/menus'));
  const { registerMenu, deleteMenu } = fastify.menusController;

  fastify.post('/menus', {
    handler: registerMenu,
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

  fastify.delete('/menus/:menuId', {
    handler: deleteMenu,
    schema: {
      params: {
        type: 'object',
        required: ['menuId'],
        properties: {
          menuId: { type: 'string', minLength: 1 }
        }
      },
      response: {
        '4xx': {
          error: { type: 'string' },
          message: { type: 'string' },
          statusCode: { type: 'number' }
        }
      }
    }
  });
};