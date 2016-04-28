var passport = require('passport');

module.exports = function (app) {
    app.use(passport.initialize());
    app.use(passport.session());
    
    passport.serializeUser(function(user, done){
        console.log('passport serialize user');
        done(null, user);
    });
    
    passport.deserializeUser(function(user, done){
        console.log('passport de-serialize user')
        done(null, user);
    });
    
    require('./strategies/local.strategy')();
};