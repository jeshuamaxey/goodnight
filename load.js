var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/goodnight-dev');
var Place = require('./server/api/place/place.model.js')
var places = require('./places.json');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  Place.collection.insert(places, function(err, docs){
      if(err){
        console.trace(err);
        mongoose.disconnect();
        return;
      }
      console.log(docs.length + ' inserted')
      mongoose.disconnect();
  });
});
