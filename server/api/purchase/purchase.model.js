'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.Types.ObjectId,
    Drink = require('../drink/drink.model.js');

var PurchaseSchema = new Schema({
  user: ObjectId,
  drinks: [{type: ObjectId, ref: 'Drink'}],
  time: Number,
  status: String
});

module.exports = mongoose.model('Purchase', PurchaseSchema);
