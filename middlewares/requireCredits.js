//middleware to check that user has some credits in their account:

module.exports = (req, res, next) => {
    if(req.user.credits < 1) {
        //403 = Forbidden
        return res.status(403).send({ error: 'Not enough credits!' });
    }


    //else continue...
    next();
};