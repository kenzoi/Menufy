'use strict';

module.exports = async function (fastify, opts) {
  const { createSubMenu, deleteSubMenu } = fastify.menusControllers;

  fastify.post('/', {
    handler: createSubMenu,
    schema: {
      body: {
        type: 'object',
        required: ['name'],
        properties: {
          name: {type: 'string'}
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
        '201': {
          type: 'object',
          properties: {
            _id: { type: 'string' },
            name: { type: 'string' },
            groups: { type: 'array' }
          }
        }
      }
    }
  });

  fastify.delete('/', {
    handler: deleteSubMenu,
    schema: {
      body: {
        type: 'object',
        required: ['_id'],
        properties: {
          _id: {type: 'string'}
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
        '4xx': {
          error: { type: 'string' },
          message: { type: 'string' },
          statusCode: { type: 'number' }
        }
      }
    }
  });

};