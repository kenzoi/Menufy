'use strict';

const mongoose = require('mongoose');
const fp = require('fastify-plugin');

module.exports = fp(async function (fastyfy) {
  try {
    await mongoose.connect('mongodb://localhost/users', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
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
    username: { type: String, required: true, unique: true }, // Mongoose unique is not suitable for production - https://mongoosejs.com/docs/faq.html
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    restaurantName: { type: String, required: true },
    whatsapp: String,
    phone: String,
    website: String,
    address: String,
    menu: [subMenuSchema]
  });

  // Drop Database
  // await mongoose.connection.dropDatabase();

  const Menu = mongoose.model('Menu', menuSchema);
  const SubMenuSchema = mongoose.model('SubMenu', subMenuSchema);
  // syncIndexes to unique start working
  // await Menu.syncIndexes();

  fastyfy.decorate('mongoose', { instance: mongoose, Menu, SubMenuSchema });
});