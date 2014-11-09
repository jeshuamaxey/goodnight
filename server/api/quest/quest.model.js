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

//either the active quest or a summary of the last 7 days
QuestSchema.statics.summary = function(user, cb) {
  //look for the active quest
  User.findById(user)
  .populate({path: 'quest'})
  .exec(function(err, fullUser){
    if(err){
      return cb(err);
    }
    if(fullUser.quest && fullUser.quest.active){
      return cb(null, fullUser.quest);
    }

    //there is no active quest, we must generate a summary
    var userId = new ObjectId(user);
    this.find({user: userId, end:{$gt: Date.now() - 7*24*60*60*1000}}, function(err, recent){
      if (err) {
        cb(err);
      }

      //calculate average pace
      var avgpace = recent.reduce(function(acc, quest){
        return acc + quest.pace;
      }, 0) / recent.length;

      //calculate money spent
      var moneySpent = recent.reduce(function(acc, quest){
        return acc + quest.moneySpent;
      }, 0);

      //calculate drinks bought
      var unitsConsumed = recent.reduce(function(acc, quest){
        return acc + quest.unitsConsumed;
      }, 0);

      cb(
        null, 
        {
          pace: avgpace, 
          moneySpent: moneySpent, 
          unitsConsumed: unitsConsumed
        }
      );
    });

  });
}

module.exports = mongoose.model('Quest', QuestSchema);
