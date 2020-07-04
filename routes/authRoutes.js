const passport = require('passport');

module.exports = (app) => {
    //Route Handlers:

    app.get(
        '/auth/google', 
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );
    
    app.get(
        '/auth/google/callback', 
        passport.authenticate('google'),
        (req, res) => {
            //redirect whoever is making request to another route in application:
            res.redirect('/surveys');
        } 
    );

    app.get('/api/logout', (req, res) => {
        //logout attached to req by passport
        req.logout();
        //redirect user to route route of our app:
        res.redirect('/');
    });

    app.get('/api/current_user', (req, res) => {
        //test to make sure user has cookie token converted to user model.
        res.send(req.user);
    });
};

