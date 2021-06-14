'use strict';

module.exports = async function (fastify, opts) {
  const { createItem, deleteItem } = fastify.menusControllers;

  fastify.post('/', {
    handler: createItem,
    schema: {
      body: {
        type: 'object',
        required: ['name', 'value', 'subMenuId', 'groupId'],
        additionalProperties: false,
        properties: {
          name: { type: 'string' },
          description: { type: 'string' },
          value: {type: 'number'},
          subMenuId: { type: 'string' },
          groupId: { type: 'string' }
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
            description: { type: 'string' },
            value: {type: 'number'}
          }
        }
      }
    }
  });

  fastify.delete('/', {
    handler: deleteItem,
    schema: {
      body: {
        type: 'object',
        required: ['_id', 'subMenuId', 'groupId'],
        additionalProperties: false,
        properties: {
          _id: { type: 'string' },
          subMenuId: { type: 'string' },
          groupId: {type: 'string'}
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