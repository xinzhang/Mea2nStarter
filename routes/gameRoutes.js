var express = require('express');
var gameRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var passport = require('passport');


gameRouter.route('/my')
    .all(function (req, res, next) {
        if (!req.user) {
            //res.redirect('/');
            console.log('req user is not defined.');
        }
        next();
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
                        if (req.body.type == 'collection'){
                            
                        }
                                                                        
                        if (req.body.type == 'collection'){
                            
                        }
                        
                        res.send(req.user);             
                    }
                    
                ); //end findOne     
        });

    });

module.exports = gameRouter;