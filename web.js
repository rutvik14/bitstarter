var express = require('express');

var app = express.createServer(express.logger());

var fs=require('fs');
var data=fs.readFileSync('index.html');

var buf=new Buffer(data,'utf-8');

app.get('/', function(request, response) {
  response.send(buf.toString('utf-8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
