'use strict';

const fp = require('fastify-plugin');

module.exports = fp(async function (fastify) {
  const { Menu } = fastify.mongoose;

  async function registerUser (request, reply) {
    try {
      const { username, password, email, restaurantName } = request.body;
      return await Menu.create({ username, password, email, restaurantName });

    } catch (err) {
      console.error(err);
      throw fastify.httpErrors.internalServerError();
    }
  }

  fastify.decorate('usersController', { registerUser });
});