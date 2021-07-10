'use strict';

module.exports = async function (fastify) {
  const { createGroup, deleteGroup } = fastify.menusControllers;

  fastify.post('/', {
    handler: createGroup,
    schema: {
      body: {
        type: 'object',
        required: ['name', 'subMenuId'],
        additionalProperties: false,
        properties: {
          name: { type: 'string' },
          subMenuId: { type: 'string' }
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
            items: { type: 'array' }
          }
        }
      }
    }
  });

  fastify.delete('/', {
    handler: deleteGroup,
    schema: {
      body: {
        type: 'object',
        required: ['_id', 'subMenuId'],
        additionalProperties: false,
        properties: {
          _id: { type: 'string' },
          'subMenuId': { type: 'string' }
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