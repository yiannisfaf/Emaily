const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
//express doesn't by default parse POST's payload so we need this middleware library:
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI, {useNewUrlParser: true});

const app = express();    

//All middleware for express (app) called using app.use():
app.use(bodyParser.json());

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
require('./routes/billingRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    //Express will serve up production assets like our main.js file, main.css file!
    app.use(express.static('client/build'));

    //Express will serve up the index.html file if it doesn't recognise the route:
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);


