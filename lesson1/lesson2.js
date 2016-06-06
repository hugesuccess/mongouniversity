var mongodb = require('mongodb');

var uri = "mongodb://localhost:27017/mongouniversity";

mongodb.MongoClient.connect(uri, function(err, db) {
  if (err) {
    console.log(err);
    return process.exit(1);
  };


  db.collection('sample').insert({x: 1}, function(err, res) {
    if(err) {
      console.log(err);
      return process.exit(1);
    }

    db.collection('sample').find().toArray(function(err, docs) {
      if(err) {
        console.log(err);
        return process.exit(1);
      }


      console.log(docs);
      return process.exit(1);
    });
  });

});
