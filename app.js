var express = require('express');
var app = express();

var crapyRouter = require('./routes/scrapy');
// var exchangeRateRouter = require('./routes/exchangeRate');

app.use('/scrapy', crapyRouter);
app.use(express.urlencoded())
app.use(express.json());

app.listen(3000);
console.log('Listening port 3000')
