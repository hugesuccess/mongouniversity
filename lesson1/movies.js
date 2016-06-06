var mongodb = require('mongodb');


var uri = "mongodb://localhost:27017/mongouniversity";

mongodb.MongoClient.connect(uri, function(err, db) {
  if(err) {
    console.log(err);
    process.exit(1);
  }

  var doc = {
    title: "Jaws",
    year: 1975,
    director: "Steven Spielberg",
    rating: "R"
  };

  db.collection('movies').insert(doc, function(err, result) {
    if(err) {
      console.log(err);
      process.exit(1);
    }

    console.log(result);

    db.collection('movies').find().toArray(function(err, docs) {
      if(err) {
        console.log(err);
        process.exit(1);
      }

      console.log(docs)
      process.exit(0);
    });

  })
});
