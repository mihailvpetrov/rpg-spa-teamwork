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

router.get('/sugnin', function (req, res, next) {
    $("#content").load("../pages/signin.html", function () {
        alert("Load was performed.");
    });
});

module.exports = router;