'use strict';


module.exports = async function (fastify, opts) {
  const {getUser, postUser, test} = require('../controllers/users');
  fastify.get('/users', getUser);
  fastify.post('/users', postUser);

};
