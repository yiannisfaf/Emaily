//middleware is a function that takes in a incoming response and modifies it in some way

module.exports = (req, res, next) => {
    //if passport does not find a user that was referenced inside the cookie of the request
    if(!req.user) {
        //401 = Forbidden
        return res.status(401).send({ error: 'You must log in!' });
    }

    //else continue...
    next();
};