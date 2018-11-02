var express = require('express');
var app = express();
var exports = module.exports = {};

// exports.welcomeMessage = function(){
//     var message = "Hello World";
//     return message;
// }

function welcomeMessage(){
    var message = "Welcome to CI/CD 101 using CircleCI!";
    return message;
}

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    // var message = "Hello World";
    res.render("index", {message: exports.welcomeMessage});
});

var server = app.listen(5000, function () {
    console.log("Node server is running..");
});

module.exports = server;
module.exports.welcomeMessage = welcomeMessage;