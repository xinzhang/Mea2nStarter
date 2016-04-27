var express = require('express');
var authRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var passport = require('passport');

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
                    req.login(results.ops[0], function () {                        
                        res.redirect('/auth/profile');
                    })
                });
        });

    });

authRouter.route('/profile')
    .get(function (req, res) {
        console.log('Profile ' + req.body);

        res.json(req.user);
    });

authRouter.route('/login')
    .post(passport.authenticate('local', {
        failureredirect: '/'
    }), function (req, res) {
        res.redirect('/auth/profile');
    });

module.exports = authRouter;