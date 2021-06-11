'use strict';

const users = ['kenzo'];

async function getUser (request, reply) {
  return users;
}

async function postUser (request, reply) {
  users.push(request.body.name);
  return 'user added';
}

module.exports = { getUser, postUser };