const passport = require('passport');

module.exports = (app) => {
    //Route Handlers:

    app.get(
        '/auth/google', 
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );
    
    app.get('/auth/google/callback', passport.authenticate('google'));

    app.get('/api/logout', (req, res) => {
        //logout attached to req by passport
        req.logout();
        //proove to user that they are logged out
        res.send(req.user);
    });

    app.get('/api/current_user', (req, res) => {
        //test to make sure user has cookie token converted to user.
        res.send(req.user);
    });
};

