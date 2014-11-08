var mongoose = require('mongoose');
var drinks = require('./wetherspoons.json');
mongoose.connect('mongodb://localhost/goodnight-dev');
var Drink = require('./server/api/drink/drink.model.js')
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  Drink.collection.insert(drinks, function(err, docs){
    if(err){
      console.log(err);
      mongoose.disconnect();
      return;
    }
    console.log(docs.length + ' drinks inserted')
    mongoose.disconnect();
  })
})
