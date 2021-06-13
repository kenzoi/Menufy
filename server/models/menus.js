'use strict';

const mongoose = require('mongoose');
const fp = require('fastify-plugin');

module.exports = fp(async function (fastyfy) {
  try {
    await mongoose.connect('mongodb://localhost/users', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
    console.log('--- Connected to Mongo ---');
  } catch (err) {
    console.error(err);
  }

  const Schema = mongoose.Schema;

  const itemSchema = new Schema({
    name: { type: String, required: true },
    description: String,
    value: { type: Number, required: true }
  });

  const groupSchema = new Schema({
    name: { type: String, required: true},
    items: [itemSchema]
  });

  const subMenuSchema = new Schema({
    name: { type: String, required: true },
    groups: [groupSchema]
  });

  const menuSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    restaurantName: { type: String, required: true },
    whatsapp: String,
    phone: String,
    website: String,
    address: String,
    menu: [subMenuSchema]
  });

  const Menu = mongoose.model('Menu', menuSchema);

  fastyfy.decorate('mongoose', { Menu, instance: mongoose });
});