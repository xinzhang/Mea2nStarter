var express = require('express');
var paymentRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var passport = require('passport');
var util = require('util');

var Pin = require('pinjs');

var pin = Pin.setup({
    key: 'vD3FnO5n7elLWkK-z4zJpg',
    production: false
});

paymentRouter.route('/card')
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

        var payment = {            
        }
        
        payment = req.body;

        pin.createCharge(payment, function (err, res) {
            console.log(res.body);
        });

        var url = 'mongodb://localhost:27017/MEA2N';
        mongodb.connect(url, function (err, db) {

            var collection = db.collection('payments');
            
        });
    });

module.exports = paymentRouter;
    