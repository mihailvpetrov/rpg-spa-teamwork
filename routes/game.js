var express = require('express');
var router = express.Router();
var $ = require('jQuery');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send('game')
});

module.exports = router;