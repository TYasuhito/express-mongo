var express = require('express');
var app = express();
var mongoose = require('mongoose');

//DB setup
mongoose.connect("mongodb://mongo:27017/test");

app.get('/', function(req, res) {
    res.send("Hello World-changed-2 ");
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
});

app.listen(3000, function(){
    console.log('Example app listening on port 3000!');
});
