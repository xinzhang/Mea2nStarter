var express = require('express');
var gameLibraryRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var passport = require('passport');
var util = require('util');

gameLibraryRouter.route('/search')    
    .get(function (req, res) {
        
        var keywords = req.param.q

        var url = 'mongodb://localhost:27017/MEA2N';
        mongodb.connect(url, function (err, db) {

            var collection = db.collection('games_library');
            collection.find({
                    $text:{$search: keywords}
                }, function (err, cursor) {
                        if (err) res.status(400).send(err.errorMessage);
                        
                        var docs = [];
                        cursor.each(function (err, item) {
                            if (err || !item) {
                                res.status(200).send(docs);
                                db.close();
                            }
                            else {
                                docs.push(item);
                            }
                        })
                }); //end find
        });

    });

gameLibraryRouter.route('/addToGames/:id')    
    .get(function (req, res) {
        var _id_ = req.params.id;
        console.log('_id_ ' + _id_);
        
        var url = 'mongodb://localhost:27017/MEA2N';
        mongodb.connect(url, function (err, db) {

            var collection = db.collection('games_library');
            collection.findOne({
                _id: _id_
            },
                function (err, result) {
                    var game = result;

                    db.collection('games').find({
                        gameId: {"isin": game.isin}
                    }, function (err, cursor) {
                        if (err) res.status(400).send(err.errorMessage);
                        
                        if (cursor.count() == 0) {
                            //add the game from library to rental
                            console.log(JSON.stringify(game));
                        }
                        
                        
                        //  var doc = {};
                        // doc.gameTitle = title;
                        // doc.releaseDate = jsonGameObj['release date'];
                        // doc.platform = 'ps4';
                        // doc.publisher = jsonGameObj.Publisher;
                        // doc.smallImageUrl = jsonGameObj['Box Art'];
                        // doc.largeImageUrl = '';
                        // doc.quanity = 9999;                     
                        // doc.edition = 'standard';
                        // doc.exclusive = jsonGameObj.Exclusive;
                        // doc.genre = jsonGameObj.Genre;
                        // doc.ageRating = jsonGameObj['Age Rating'];
                        // doc.gameId = i;
                        // doc.isin = randomString(10);
                       
                    })

                }

            ); //end findOne     
        });

    });

module.exports = gameLibraryRouter;