var express = require('express');
var router = express.Router();
var $ = require('jquery');

/* GET home page. */
router.get('/api/character', function (req, res, next) {
    res.send('character');
});

module.exports = router;