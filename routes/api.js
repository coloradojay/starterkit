var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function(req, res, next){
    res.json({
        message: 'Horray! Welcome to our API!'
    });
});

/* GET users listing. */
router.get('/users', function (req, res, next) {
    User.find(function(err, user){
        if(err) {
            res.send(err);
        }
        res.json(user);
    });
});

module.exports = router;
