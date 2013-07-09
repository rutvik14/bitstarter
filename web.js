var express = require('express');

var app = express.createServer(express.logger());

var fs=require('fs');
fs.readFileSync('index.html',function(err,data){
 if(err) throw err;
 });

app.get('/', function(request, response) {
  response.send(console.log(data.tostring('utf-8')));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
