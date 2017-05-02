// SETUP

var express = require('express');
var low = require('lowdb');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8080;

var app = express();
var db = low('./database/database.json');

var user = require('./routes/user');
var character = require('./routes/character');
var game = require('./routes/game');

// CONFIGURATION

app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/', user);
app.use('/character', character);
app.use('/game', game);

// START

app.listen(port, function () {
  console.log('Application is listening on port ' + port + "!");
})