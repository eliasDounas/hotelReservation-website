const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');
const User = require('../models/account');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: '/google/redirect'
    }, (accessToken, refreshToken, profile, done) => {
        // check if user already exists in our own db
        User.findOne({email: profile.emails[0].value}).then((currentUser) => {
            if(currentUser){
                // already have this user
                done(null, currentUser);
            } else {
                // if not, create user in our db
                new User({
                    username: profile.displayName,
                    email: profile.emails[0].value,
                    password: ''
                }).save().then((newUser) => {
                    done(null, newUser);
                });
            }
        });
    })
);