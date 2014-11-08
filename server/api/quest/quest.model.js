'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var QuestSchema = new Schema({
  name: String,
  rating: Number, //out of 5
  start: Number, //timestamp
  end: Number, //timestamp
  unitsConsumed: Number,
  pace: Number,
  purchases: Array
});

module.exports = mongoose.model('Quest', QuestSchema);
