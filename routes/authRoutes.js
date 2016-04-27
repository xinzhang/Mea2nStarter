var express = require('express');
var authRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

authRouter.route('/register')
    .post(function (req, res) {
        console.log('Register ' + req.body);
        
        var url = 'mongodb://localhost:27017/MEA2N';
        mongodb.connect(url, function (err, db) {
            var collection = db.collection('users');
            var user = {
                email: req.body.email,
                password: req.body.password
            };

            collection.insert(user,
                function (err, results) {
                    req.login(req.body, function () {
                        //res.status(200).send(req.body);
                        res.redirect('/auth/profile');
                    })                    
                });
        });

    });

authRouter.route('/profile')
    .get(function(req,res) {
        console.log('Profile ' + req.body);
        
        res.json(req.user);
    })

module.exports = authRouter;