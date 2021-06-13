'use strict';

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    throw fastify.httpErrors.notFound();
  });
};
