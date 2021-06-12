'use strict';

const fp = require('fastify-plugin');

module.exports = fp(async function (fastify) {
  const { Menu } = fastify.mongoose;

  async function registerUser (request, reply) {
    try {
      const { username, password, email, restaurantName } = request.body;
      const menu = await Menu.create({ username, password, email, restaurantName });
      const response = {
        _id: menu._id,
        username: menu.username,
        email: menu.email,
        restaurantName: menu.restaurantName
      };
      reply.code(201);
      return response;
    } catch (err) {
      console.error(err);
      throw fastify.httpErrors.internalServerError();
    }
  }

  fastify.decorate('usersController', { registerUser });
});