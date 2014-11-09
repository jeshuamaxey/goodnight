'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.Types.ObjectId;

var PurchaseSchema = new Schema({
  user: ObjectId,
  drinks: Array,
  time: Number
});

module.exports = mongoose.model('Purchase', PurchaseSchema);
