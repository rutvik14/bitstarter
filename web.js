>0;271;0cvar express = require('express');

var app = express.createServer(express.logger());

var fs=require('fs');
var data=fs.readFileSync('index.html','ascii');

app.get('/', function(request, response) {
  response.send(console.log(data));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
