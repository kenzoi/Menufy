'use strict';

const mongoose = require('mongoose');
const fp = require('fastify-plugin');

module.exports = fp(async function (fastyfy) {
  try {
    await mongoose.connect('mongodb://localhost/users', { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('--- Connected to Mongo ---');
  } catch (err) {
    console.error(err);
  }

  const Schema = mongoose.Schema;
  const MenuSchema = new Schema({
    name: { type: String, required: true }
  });
  const Menu = mongoose.model('Menu', MenuSchema);

  fastyfy.decorate('mongoose', { Menu });
});