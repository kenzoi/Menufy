'use strict';

const fp = require('fastify-plugin');

module.exports = fp(async function (fastify) {
  const mongoose = fastify.mongoose.instance;
  const { Menu, SubMenuSchema } = fastify.mongoose;
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

  async function getMenu (request) {
    try {
      const { menuId } = request.params;
      const idIsValid = mongoose.Types.ObjectId.isValid(menuId);
      if (!idIsValid) return httpErrors.badRequest('Not a valid id');
      const menuFound = await Menu.findById(menuId).exec();
      if (!menuFound) return httpErrors.notFound('Not found this id');
      return { menu: menuFound.menu };
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
      const isDeleted = await Menu.findByIdAndDelete(menuId).exec();
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
      for (const prop in request.body) { //TODO if the client pass an object but with no expected value we're return 204.
        updatedValues[prop] = request.body[prop];
      }
      const isUpdated = await Menu.findByIdAndUpdate(menuId, updatedValues).exec();
      if (!isUpdated) return httpErrors.notFound('Not found this id'); // Because isUpdated will be the old object or null if not found.
      reply.code(204);
    } catch (err) {
      console.error(err);
      throw httpErrors.internalServerError();
    }
  }

  async function createSubMenu (request, reply) {
    try {
      const { menuId } = request.params;
      const { name } = request.body;
      const idIsValid = mongoose.Types.ObjectId.isValid(menuId);
      if (!idIsValid) return httpErrors.badRequest('Not a valid id');
      const menuFound = await Menu.findById(menuId).exec();
      if (!menuFound) return httpErrors.notFound('Not found this id'); // Because isUpdated will be the old object or null if not found.
      const newSubMenu = new SubMenuSchema({ name });
      const menuLength = menuFound.menu.push(newSubMenu);
      await menuFound.save();
      return menuFound.menu[menuLength - 1];
    } catch (err) {
      console.error(err);
      throw httpErrors.internalServerError();
    }
  }

  async function deleteSubMenu (request, reply) {
    try {
      const { menuId } = request.params;
      const { _id } = request.body;
      const menuIdIsValid = mongoose.Types.ObjectId.isValid(menuId);
      if (!menuIdIsValid) return httpErrors.badRequest('Not a valid menu id');
      const subMenuIdIsValid = mongoose.Types.ObjectId.isValid(_id);
      if (!subMenuIdIsValid) return httpErrors.badRequest('Not a valid submenu id');
      const menuFound = await Menu.findById(menuId).exec();
      if (!menuFound) return httpErrors.notFound('Menu not found this id');
      const newSubmenu = menuFound.menu.pull(_id); // If there is no element still return the array from DB without warning. 
      await menuFound.save();
      return newSubmenu;
    } catch (err) {
      console.error(err);
      throw httpErrors.internalServerError();
    }
  }
  fastify.decorate('menusControllers', { registerMenu, getMenu, deleteMenu, updateMenu, createSubMenu, deleteSubMenu });
});