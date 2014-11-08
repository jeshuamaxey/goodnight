'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MenuSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Menu', MenuSchema);