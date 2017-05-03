var express = require('express');
var router = express.Router();
var $ = require('jquery');


router.post('/api/signup', function (req, res, next) {
    res.send('user');
});

router.get('/api/signin', function (req, res, next) {
    $("#content").load("../views/signin.html");
});

module.exports = router;