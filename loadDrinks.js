var mongoose = require('mongoose');
var drinks = require('./wetherspoons.json');
mongoose.connect('mongodb://localhost/goodnight');
var Place = require('./server/api/place/place.model.js')
var Drink = require('./server/api/drink/drink.model.js')
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  Place.find({name: 'Wetherspoons'}, function(err, ws){
    for (var dr in drinks){
        var d = drinks[dr];
        var drink = new Drink(
          {
            place: ws._id,
            name: d.name,
            units: d.units,
            price: d.price,
            img: d.img
          });
        drink.save();
    }
  });
})
