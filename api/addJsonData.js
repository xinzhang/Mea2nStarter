var fs = require('fs');
var mongodb = require('mongodb');

fs.readFile('./products/games.json', 'utf-8', function (err, data) {
    if (err) throw err;

    var jsonObj = JSON.parse(data);

    var url = 'mongodb://localhost:27017/MEA2N';
    mongodb.connect(url, function (err, db) {
        if (err) throw err;

        var collection = db.collection('games');

        for (var i = 0; i < jsonObj.length; i++) {
            var jsonGameObj = jsonObj[i];

            collection.findOne({ gameTitle: jsonGameObj.gameTitle }, function (err, doc) {
                // if (doc != null) {
                //     console.log("doc " + doc);                        
                // }
                
                // if (doc != null && doc._id != null) {
                //     console.log("doc id " + doc._id);
                // }
                
                // if (doc == null || doc._id == null ) {
                //      collection.insert(jsonObj, function (err, result) {
                //          if (err) throw err;
                //          console.log(result);
                //      })
                //     //console.log( i +  ' - try to run insert ' + jsonGameObj.gameTitle);
                // }

            });

             collection.findAndModify({
                 query: { gameTitle: jsonGameObj.gameTitle },
                 update: {
                     $setOnInsert: { jsonGameObj}
                 },
                 new: true,   // return new doc if one is upserted
                 upsert: true // insert the document if it does not exist
             }, function(err, result){
             });

            //  collection.insert(jsonObj, function (err, result) {
            //      if (err) throw err;
            //      console.log(result);
            //  });
        }

    });
});

