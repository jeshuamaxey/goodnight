'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PlaceSchema = new Schema({
  name: { type : String , unique : true, required : true, dropDups: true },
  logo: String,
});

module.exports = mongoose.model('Place', PlaceSchema);
