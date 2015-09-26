

var port = process.env.PORT || 5000;

var express = require('express');
var app = express();


app.use(express.static(__dirname))
  .get('/', function (req, res) {
    res.sendFile('index.html');
  })
  .listen(port, function (err) {
    if (err) { 
      console.log(err);
      return;
    };
    console.log('Listening at localhost:' + port);
  });
