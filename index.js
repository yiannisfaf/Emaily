const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI, {useNewUrlParser: true});

const app = express();    

//we need to tell express that it needs to make use of cookies into our app:
app.use(
    cookieSession({
        //how long cookie can exist in browser before expiry:
        maxAge: 30 * 24 * 60 * 60 * 1000,
        //key used to encrypt cookie for security:
        keys: [keys.cookieKey]
    })
);
//telling passport to use cookies we have set up
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);


