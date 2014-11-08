var mongoose = require('mongoose');
var drinks = require('./wetherspoons.json');
mongoose.connect('mongodb://localhost/goodnight');
var Place = require('./server/api/place/place.model.js')
var Drink = require('./server/api/drink/drink.model.js')
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  Place.find({name: 'Wetherspoons'}, function(err, ws){
    if(err){
      console.log(err);
      return;
    }
    console.log(ws);
    //var drinkslist = drinks.map(function(d){
      //return {
        //units: d.units,
        //price: d.price,
        //img: d.img
      //};
    //});

    //function uniq(a) {
        //var seen = {};
        //var list = a.filter(function(item) {
            //return seen.hasOwnProperty(item.name) ? false : (seen[item.name] = true);
        //});
        //console.log(seen);
        //return list;
    //}

    //console.log(drinkslist);
    Drink.collection.insert(drinks, function(err, docs){
      if(err){
        console.log(err);
        mongoose.disconnect();
        return;
      }
      console.log(docs.length + ' drinks inserted')
      mongoose.disconnect();
    })
  });
})
