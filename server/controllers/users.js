'use strict';

const fp = require('fastify-plugin');

module.exports = fp(async function (fastify) {
  const { Menu } = fastify.mongoose;

  async function getUser (request, reply) {
    return await Menu.find({});
  }

  async function postUser (request, reply) {
    try {
      const { username, password, email, restaurantName } = request.body;
      return await Menu.create({ username, password, email, restaurant: {name: restaurantName} });

    } catch (err) {
      console.error(err);
      reply.internalServerError();
    }
  }

  fastify.decorate('usersController', { getUser, postUser });
});