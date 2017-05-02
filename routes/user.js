var express = require('express');
var router = express.Router();
var $ = require('jquery');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send('user');
});

router.get('/signup', function (req, res, next) {
    res.send('user');
});

router.get('/signin', function (req, res, next) {
    $("#content").load("../views/signin.html");
});

router.get('*', function (req, res) {
    res.sendFile('./index.html'); // load our public/index.html file
});

module.exports = router;