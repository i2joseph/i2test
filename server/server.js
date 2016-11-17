var express = require('express');
var app = express();

//both of these work correctly
var industryintel = require('../source/industryintel.json');
var table = require('../source/table.json');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE, HEAD");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.get('/industryintel', function (req, res) {
  res.send(industryintel);
});

app.get('/table', function (req, res) {
  res.send(table);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!'); 
});