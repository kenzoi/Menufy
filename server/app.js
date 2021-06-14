'use strict';

const path = require('path');
const AutoLoad = require('fastify-autoload');

module.exports = async function (fastify, opts) {
  fastify.register(require('./models/menus'));
  fastify.register(require('fastify-cors')); // TODO - config CORS to only allow specific origins.

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  });

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  });
};