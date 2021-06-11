'use strict';

const User = require('../models/users');

async function getUser (request, reply) {
  return User.find({});
}

async function postUser (request, reply) {
  return User.create({name: request.body.name});
}

async function test (fastify) {
  console.log(fastify);
  return 'works';
}

module.exports = { getUser, postUser, test };