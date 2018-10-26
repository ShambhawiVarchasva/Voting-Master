const mongoose = require('mongoose');
const keys = require('./keys');

// Map global promises
mongoose.Promise = global.Promise;
// Mongoose Connect
mongoose.connect('mongodb://localhost/ratingpoll')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
