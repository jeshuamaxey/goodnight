var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/goodnight');
var Place = require('./server/api/place/place.model.js')

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  var ws = new Place({name: 'Wetherspoons'});
  ws.save(function(err, doc){
    if(err){
      console.error(err);
    }
    console.log(doc);
    mongoose.disconnect();
    }
  );
});
