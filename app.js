var express = require('express')
var port = 3000;

var login = require('./routes/login');
var heroselect = require('./routes/heroselect');
var game = require('./routes/game');

var app = express()

app.use('/', login);
app.use('/heroselect', heroselect);
app.use('/game', game);

app.listen(port, function () {
  console.log('Application is listening on port ' + port + "!");
})