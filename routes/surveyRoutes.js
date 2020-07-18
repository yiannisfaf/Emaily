const _ = require('lodash');
const { Path } = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

//side-step issue with mongoose and running tests, re instantiate Survey collection
const Survey = mongoose.model('surveys');

module.exports = (app) => {
    app.get('/api/surveys', requireLogin, async (req,res) => {
        //req.user.id gives current user - as current user is making this get request
        const surveys = await Survey.find({ _user: req.user.id })
            .select({ recipients: false });

        //send the surveys back to the frontend
        res.send(surveys);
    });


    app.get('/api/surveys/:surveyId/:choice', (req, res) => {
        res.send('Thanks for voting!');
    });

    app.post('/api/surveys/webhooks', (req, res) => {
        const p = new Path('/api/surveys/:surveyId/:choice');
        
        _.chain(req.body)  
            .map(({ email, url }) => {
                const match = p.test(new URL(url).pathname);
                if (match) {
                    return { emaiL: email, surveyId: match.surveyId, choice: match.choice };
                }
            })
            //remove any undefined elements inside events - duplicate events:
            .compact()
            //get rid of records with duplicate email property and surveyId property
            .uniqBy('email', 'surveyId')
            .each(({ surveyId, email, choice }) => {
                //Look into Survey records on MongoDB and find a record with the following criteria:
                //All this code is executed in MongoDB so no need to move data to backend, update it and then send it back.
                Survey.updateOne({
                    _id: surveyId,
                    recipients: {
                        $elemMatch: { email: email, responded: false }
                    }
                }, {
                    //choice is either yes or no. $inc is a mongo operator allows us to update property in database.
                    //increment ($inc) to the choice property (either yes or no)
                    $inc: { [choice]: 1 },
                    $set: { 'recipients.$.responded': true },
                    lastResponded: new Date()
                }).exec();
            })
            .value();

        res.send({});
    });


    app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
        //properties from front-end request
        const { title, subject, body, recipients } = req.body;

        const survey = new Survey({
            //new record of Survey collection:
            title: title,
            subject: subject,
            body: body,
            recipients: recipients.split(',').map(email => ({ email: email.trim() })),
            _user: req.user.id,
            dateSent: Date.now()
        });

        // Great place to send an email!
        // Survey Template defines HTML of survey email 
        const mailer = new Mailer(survey, surveyTemplate(survey));
        
        try {
            await mailer.send();
            //save() to database
            await survey.save();
            //every email sent costs 1 credit to deduct 1 credit
            req.user.credits -= 1;
            const user = await req.user.save();

            //send back updated user model with new value of credits and survey to Front End
            res.send(user);
        } catch(err) {
            res.status(422).send(err);
        }
    });
};