'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.Types.ObjectId;

var DrinkSchema = new Schema({
  name: String,
  units: Number,
  price: Number,
  img: String
});

module.exports = mongoose.model('Drink', DrinkSchema);
