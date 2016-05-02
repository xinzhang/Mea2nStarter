var express = require('express');
var gameRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var passport = require('passport');
var util = require('util');

gameRouter.route('/my')
    .all(function (req, res, next) {
        if (!req.user) {
            //res.redirect('/');
            console.log('req user is not defined.');
            res.status(401).send("please login first");
        }
        else {
            next();
        }
    })
    .post(function (req, res) {
        console.log('my ' + JSON.stringify(req.body));
        console.log('my user:' + JSON.stringify(req.user));

        var url = 'mongodb://localhost:27017/MEA2N';
        mongodb.connect(url, function (err, db) {

            var collection = db.collection('users');
            collection.findOne({
                email: req.user.email
            },

                function (err, results) {
                    if (req.body.type == 'collection') {

                    }

                    if (req.body.type == 'collection') {

                    }

                    res.send(req.user);
                }

            ); //end findOne     
        });

    });

gameRouter.route('/newRelease')

    .get(function (req, res) {
        console.log('newRealease ' + JSON.stringify(req.body));
        console.log('newRealease user:' + JSON.stringify(req.user));

        var url = 'mongodb://localhost:27017/MEA2N';
        mongodb.connect(url, function (err, db) {

            var collection = db.collection('games');
            collection.find({}, function (err, cursor) {
                if (err) res.status(400).send(err.errorMessage);
                var docs=[];
                cursor.each(function(err, item){                    
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

module.exports = gameRouter;