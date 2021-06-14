'use strict';

const fp = require('fastify-plugin');

module.exports = fp(async function (fastify) {
  const { Menu } = fastify.mongoose;
  const { httpErrors } = fastify;

  async function authenticateUser (request, reply) {
    try {
      const { username, email, password } = request.body;
      let menuFound;
      if (email || username) {
        menuFound = await Menu.findOne(email ? {email} : {username}).exec();
      } else {
        return httpErrors.badRequest();
      }
      if (!menuFound) return httpErrors.forbidden();
      if (menuFound.password !== password) return httpErrors.forbidden();
      const response = { token: 1, _id: menuFound._id };
      return response;
    } catch (err) {
      console.error(err);
      throw httpErrors.internalServerError();
    }
  }

  fastify.decorate('authControllers', { authenticateUser });
});