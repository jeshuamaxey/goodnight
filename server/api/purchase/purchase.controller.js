'use strict';

var _ = require('lodash');
var Purchase = require('./purchase.model');
var Quest = require('../quest/quest.model.js');
var User = require('../user/user.model.js');
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

// Get list of purchases
exports.index = function(req, res) {
  Purchase.find(function (err, purchases) {
    if(err) { return handleError(res, err); }
    return res.json(200, purchases);
  });
};

// Get a single purchase
exports.show = function(req, res) {
  Purchase.findById(req.params.id, function (err, purchase) {
    if(err) { return handleError(res, err); }
    if(!purchase) { return res.send(404); }
    return res.json(purchase);
  });
};

// Creates a new purchase in the DB.
exports.create = function(req, res) {
  var data = {
    user: ObjectId(req.body.userIdString),
    pending: true,
    time: req.body.time,
    drinks: req.body.drinks
  }
  
  Purchase.create(data, function(err, purchase) {
    if(err) { return handleError(res, err); }
    Purchase.populate(purchase, {path: 'drinks'}, function(err, purchase){
      if (err){
        console.log(err);
        return;
      }
      //calculate metrics
      var totalUnits = purchase.drinks.reduce(function(prev, drink){
        return prev + drink.units;
      }, 0);

      var moneySpent = purchase.drinks.reduce(function(prev, drink){
        return prev + drink.price;
      }, 0);

      //update the current quest
      User.findById(req.body.userIdString)
      .populate({path:'quest'})
      .exec(function(err, user){
        if (err){
          console.log(err);
          return;
        }
        if (!user) {
          console.error("no user");
          return;
        }

        //check if new quest
        var quest;
        if (!user.quest){
          quest = new Quest({
            user: data.user,
            start: data.time,
            moneySpent: 0,
            totalUnits: 0,
            active: true,
            purchases: [],
            unitsConsumed: 0
          });
        } else {
          quest = user.quest;
        }

        //calculate units
        quest.unitsConsumed += totalUnits;

        //calculate moneySpent
        var soFar = quest.moneySpent || 0;
        quest.moneySpent = soFar + moneySpent;

        //add the end time of this purchase
        quest.end = data.time;

        //update everything
        var oldQuest = user.quest;
        if (oldQuest && oldQuest._id != quest) {
          oldQuest.active = false;
          oldQuest.save();
        }
        console.log(quest);
        quest.save(function(err, savedQuest){
          if(err){
            console.log(err);
            return;
          }
          user.quest = savedQuest._id;
          user.save();
          savedQuest.update(
            {$addToSet:{purchases: purchase}},
            function(err){
              if(err){
                console.error(err);
              }
            }
          );
        });
      });
    });
    return res.json(201, purchase);
  });
};

// Updates an existing purchase in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Purchase.findById(req.params.id, function (err, purchase) {
    if (err) { return handleError(res, err); }
    if(!purchase) { return res.send(404); }
    var updated = _.merge(purchase, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, purchase);
    });
  });
};

// Deletes a purchase from the DB.
exports.destroy = function(req, res) {
  Purchase.findById(req.params.id, function (err, purchase) {
    if(err) { return handleError(res, err); }
    if(!purchase) { return res.send(404); }
    purchase.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
