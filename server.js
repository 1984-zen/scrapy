// express 開啟port 3000
// var express = require('express');
// var app = express();
// var port = 3000;

// app.listen(port, function(){
//     console.log('Example app listening on port 3000!');
// });

//原生js開啟port 3000
const http = require('http');
const app = require('./app');
const port = 3000;
const server = http.createServer(app);
server.listen(port);