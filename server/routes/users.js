'use strict';

module.exports = async function (fastify) {
  await fastify.register(require('../controllers/users'));
  const { getUser, postUser } = fastify.usersController;

  fastify.get('/users', getUser);
  fastify.post('/users', postUser);
};