'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.Types.ObjectId;

var QuestSchema = new Schema({
  user: ObjectId,
  rating: Number, //out of 5
  start: Number, //timestamp
  end: Number, //timestamp
  unitsConsumed: Number,
  moneySpent: Number,
  purchases: Array,
  active: Boolean
});

QuestSchema.virtual('pace').get(function () {
    return this.unitsConsumed / (this.end - this.start) + 60*60*1000;
});

module.exports = mongoose.model('Quest', QuestSchema);
