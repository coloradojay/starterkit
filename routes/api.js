var express = require('express'),
    jwt = require('jsonwebtoken'),
    env = require('../config/env'),
    router = express.Router(),
    User = require('../models/user');

/* POST authentication route */
router.post('/authenticate', function (req, res) {
    // find the user
    User.findOne({
        email: req.body.email
    }, function (err, user) {

        if (err) throw err;

        if (!user) {
            res.status(403);
        } else if (user) {

            // check if password matches
            if (user.password != req.body.password) {
                res.status(401).json({
                    success: false,
                    message: 'Authentication failed.'
                });
            } else {

                // if user is found and password is right
                // create a token
                var token = jwt.sign(user, env.secret, {
                    expiresIn: 1440 // expires in 24 hours
                });

                // return the information including token as JSON
                res.status(200).json({
                    success: true,
                    message: 'Enjoy your token!',
                    token: token
                });
            }

        }

    });
});

router.use(function(req, res, next){

    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    // decode the token
    if(token) {
        // verify the secret and check expiration date
        jwt.verify(token, env.secret, function(err, decoded){
            if(err) {
                return res.status(400).json({
                    success: false,
                    message: 'Failed to authenticate token'
                });
            }
            else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });
    }
    else {
        // if there is no token
        // return an error
        return res.status(403).json({
            success: false,
            message: 'No token provided'
        });
    }
});


router.get('/', function (req, res, next) {
    res.json({
        message: 'Horray! Welcome to our API!'
    });
});

/* GET users listing. */
router.get('/users', function (req, res, next) {
    User.find({}, function (err, users) {
        if (err) {
            res.send(err);
        }
        res.json(users);
    });
});

module.exports = router;