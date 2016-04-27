var express = require('express');
var authRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

authRouter.route('/register')
    .post(function (req, res) {
        console.log(req.body);
        res.status(200).send(req.body);
    });

module.exports = authRouter;