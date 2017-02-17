var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var User = mongoose.model('User');

passport.use(new LocalStrategy({
        usernameField: 'logonName'
    },
    function(username, password, done) {
        if (err)
            return done(err);
        if (!user)
            return done(null, false, {
                message: 'Nesprávné jméno.'
            });
        if (!user.validPassword(password))
            return done(null, false, {
                message: 'Nesprávné heslo.'
            });
        return done(null, user);
    });
);

