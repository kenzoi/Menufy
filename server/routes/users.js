'use strict';

const {getUser, postUser} = require('../controllers/users');

module.exports = async function (fastify, opts) {

  fastify.get('/users', getUser);
  fastify.post('/users', postUser);

};
