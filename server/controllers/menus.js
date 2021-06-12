'use strict';

const fp = require('fastify-plugin');

module.exports = fp(async function (fastify) {
  const mongoose = fastify.mongoose.instance;
  const { Menu } = fastify.mongoose;
  const { httpErrors } = fastify;

  async function registerMenu (request, reply) {
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
      throw httpErrors.internalServerError();
    }
  }

  async function deleteMenu (request, reply) {
    try {
      const { menuId } = request.params;
      const idIsValid = mongoose.Types.ObjectId.isValid(menuId);
      if (!idIsValid) return httpErrors.badRequest('Not a valid id');
      const isDeleted = await Menu.findByIdAndDelete(menuId);
      if (!isDeleted) return httpErrors.notFound('Not found this id');
      reply.code(204);
    } catch (err) {
      console.error(err);
      throw httpErrors.internalServerError();
    }
  }

  async function updateMenu (request, reply) {
    try {
      const { menuId } = request.params;
      const idIsValid = mongoose.Types.ObjectId.isValid(menuId);
      if (!idIsValid) return httpErrors.badRequest('Not a valid id');
      const updatedValues = {};
      for (const prop in request.body) {
        updatedValues[prop] = request.body[prop];
      }
      const isUpdated = await Menu.findByIdAndUpdate(menuId, updatedValues);
      if (!isUpdated) return httpErrors.notFound('Not found this id'); // Because isUpdated will be the old object or null if not found.
      reply.code(204);
    } catch (err) {
      console.error(err);
      throw httpErrors.internalServerError();
    }
  }

  fastify.decorate('menusController', { registerMenu, deleteMenu, updateMenu });
});