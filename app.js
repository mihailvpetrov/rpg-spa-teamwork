// SETUP

var express = require('express');
var low = require('lowdb');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8081;

var app = express();
var db = low('./database/database.json');

var user = require('./routes/user');
var character = require('./routes/character');
var game = require('./routes/game');

// CONFIGURATION

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));
app.use('/lib', express.static(__dirname + '/node_modules'));
app.use('/api/user', user);
app.use('/api/character', character);
app.use('/api/game', game);
app.use('/api/maps', game);

// START

app.listen(port, function () {
  console.log('Application is listening on port ' + port + "!");
})