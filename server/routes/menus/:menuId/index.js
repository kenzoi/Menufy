'use strict';

module.exports = async function (fastify, opts) {
  const { deleteMenu, updateMenu } = fastify.controllers.menu;

  fastify.delete('/', {
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

  // TODO: Create a separated endpoint to deal with login information.
  fastify.put('/', {
    handler: updateMenu,
    schema: {
      body: {
        type: 'object',
        additionalProperties: false,
        properties: {
          username: { type: 'string' },
          password: { type: 'string' },
          email: { type: 'string' },
          restaurantName: { type: 'string' }
        }
      },
      params: {
        type: 'object',
        required: ['menuId'],
        properties: {
          menuId: { type: 'string', minLength: 1 }
        }
      },
      response: {
        response: {
          '2xx': {
            type: 'object',
            properties: {
              _id: { type: 'string' },
              username: { type: 'string' },
              password: { type: 'string' },
              email: { type: 'string' },
              restaurantName: { type: 'string' }
            }
          }
        },
        '4xx': {
          error: { type: 'string' },
          message: { type: 'string' },
          statusCode: { type: 'number' }
        }
      }
    }
  });
};
