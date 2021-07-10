'use strict';

module.exports = async function (fastify) {
  fastify.get('/', async function () {
    throw fastify.httpErrors.notFound();
  });
};
