'use strict';

const fp = require('fastify-plugin');

module.exports = fp(async function (fastify) {
  const { Menu } = fastify.mongoose;

  async function getUser (request, reply) {
    return await Menu.find({});
  }

  async function postUser (request, reply) {
    return await Menu.create({ name: request.body.name });
  }

  fastify.decorate('usersController', { getUser, postUser });
});