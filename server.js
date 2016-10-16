var express = require('express');
var app = express();
var path = require('path');
var server = require('http').Server(app);
var bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );

app.use( express.static(__dirname + '/client' ) );

app.get('/*', function(req,res){
  res.sendFile(path.resolve(__dirname, 'client/src/index.html'));  
});

server.listen(9999,function(){
    console.log("Server connected. Listening on port: 9999");
});