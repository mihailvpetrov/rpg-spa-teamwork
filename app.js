var express = require('express');
var low = require('lowdb');
var port = 3000;

var user = require('./routes/user');
var character = require('./routes/character');
var game = require('./routes/game');

var app = express(),
  db = low('./database/database.json');

app.use('/', user);
app.use('/character', character);
app.use('/game', game);

app.listen(port, function () {
  console.log('Application is listening on port ' + port + "!");
})