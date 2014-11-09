'use strict';

var _ = require('lodash');
var Purchase = require('./purchase.model');
var ObjectId = require('mongoose').Types.ObjectId;

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
  //User.findById(req.user._id, function (err, user) {
    //if (err) return res.send(err);
    //if (!user) return res.send(401);
    //req.user = user;
  //});

  if (req.body.drinks){
    Purchase.collections.insert(
      {
        user: new ObjectId(req.user._id),
        drink: req.body.drinks,
        time: Date.now()
      },
      function(err, docs){
        if(err){
          return handleError(res, err);
        } 
        console.log(docs.length + ' purchases made');
        res.send(201, docs);
      }
    );
  }

  return handleError(res, 'bad query');

  //Purchase.create(
    //{
      //user: req.user._id,
      //drink: req.body.drinkId,
      //time: Date.now()
    //}, 
    //function(err, purchase) {
      //if(err) { return handleError(res, err); }
      //return res.json(201, purchase);
    //}
  //);
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
