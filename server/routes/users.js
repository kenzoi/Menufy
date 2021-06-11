'use strict';

module.exports = async function (fastify) {
  await fastify.register(require('../controllers/users'));

  fastify.get('/users', fastify.usersController.getUser);
  fastify.post('/users', fastify.usersController.postUser);
};