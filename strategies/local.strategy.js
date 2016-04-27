var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongodb = require('mongodb');

module.exports = function() {
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    }, 
    function(username, password, done){
        console.log('local strategy check: ' + username);
            var url = 'mongodb://localhost:27017/MEA2N';

            mongodb.connect(url, function (err, db) {
                var collection = db.collection('users');
                collection.findOne({
                        email: username
                    },
                    
                    function (err, results) {
                        console.log(JSON.stringify(results));
                        
                        if (results.password === password) {
                            var user = results;
                            done(null, user);
                        } else {
                            done(null, false, {message: 'Bad password'});
                        }
                    }
                    
                ); //end findOne                
            }); //end connect        
    })) //end passport use
}