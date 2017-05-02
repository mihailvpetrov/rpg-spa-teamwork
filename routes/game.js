var express = require('express');
var router = express.Router();
var $ = require('jquery');

/* GET home page. */
router.get('/api/game', function (req, res, next) {
    res.send('game');
});

module.exports = router;