const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/users', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Database connection error:'));
db.once('open', () => {
  console.log('--- Connected to Mongo ---');
});
module.exports = { mongoose, db };