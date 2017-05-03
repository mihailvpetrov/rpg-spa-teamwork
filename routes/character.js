var express = require('express');
var router = express.Router();
var $ = require('jquery');

router.get('/api/character', function (req, res, next) {
    res.send('character');
});

router.post('/api/character', function (req, res, next) {
    res.send('character');
});

module.exports = router;