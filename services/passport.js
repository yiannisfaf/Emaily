const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');


//Model Class connecting to a Collection in MongoDB
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    //user.id is not the profile ID from google OAuth but is the MongoDB assigned ID for a record - so we use this as the token/cookie 
    //for user interaction with the website.
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    //id is users id we gave in serialiazeUser()
    //mongoose query findById() - async action
    //Function takes cookie and converts it into a user
    User.findById(id)
        .then(user => {
            done(null, user);
        });
});

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback'    //once user authenticates with google this is path to redirect back to our app.
        }, 
        (accessToken, refreshToken, profile, done) => {
            //mongoose query MongoDb database so we don't save user with same googleId after every authentication request
            //but this is an async action so returns a promise, 
            User.findOne({ googleId: profile.id })
                .then((existingUser) => {
                    if (existingUser) {
                        //we already have a record with the given profile ID
                        done(null, existingUser);
                    } else {
                        //Don't have an existing record:
                        //Model Instance part of Model Class User, .save takes info and saves to MongoDB Databse.
                        //Again an async operation so needs .then to confirm when completed we can finish up and call done().
                        new User({ googleId: profile.id }).save()
                            .then(user => done(null, user));
                    }
                });
        }
    )
);