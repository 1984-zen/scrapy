// var staff = require('./staff')

// console.log(staff.counter(['a', 'b', 'c']));
// console.log(staff.add(1,3));
// console.log(staff.add(staff.pi,3));

// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// //Register a listener
// emitter.on('messageLogged', function(arg){
//     console.log('Listener called', arg);
// });

// //Raise an event
// emitter.emit('messageLogged', { id: 1, url: 'http://'});

// const logger = require('./logger');
// // process.exit(1);
// logger.log('mess');

// const EventEmitter = require('events');
// const Logger = require('./logger');
// const logger = new Logger();
// //Register a listener
// logger.on('messageLogged', (arg) => {
//     console.log('Listener called', arg);
// });
// logger.log('message');
// const http = require('http');
// const server = http.createServer((req, res) => {
//     if (req.url ===  '/') {
//         res.write('Hello World');
//         res.end();
//     }
//     if (req.url === '/api/courses') {
//         res.write(JSON.stringify([1,2,3]));
//         res.end();
//     }
// });
// //Register a listener
// // server.on('connection', (socket)=>{
// //     console.log('New connection..');
// // });
// server.listen(3000);

// console.log('Listening on port 3000...');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use('/api', require('./routes/api'));

// app.get('/', (req,res) => {
//     const wes ={ name: 'Zen', cool: 'boo'};
//     res.json(wes);
// });

// app.get('/reverse/:name', (req,res) =>  {
//     res.send(req.params.name);
// });
const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://rate.bot.com.tw/xrt/quote/2019-12/USD';
rp(url)
  .then(function(html){
    //success!
    // const wikiUrls = [];
    // for (let i = 0; i < 90; i++) {
    //     wikiUrls.push($('table tbody > tr > td', html)[i].attribs);
    // }
    // console.log(wikiUrls);
    const statsTable = $('table tbody > tr', html);
    const USD_cash_trade = [];
    const USD_spot_trade = [];

    statsTable.each(function () {
        const date = $(this).find('td > a').text();
        const cash_buy = $(this).find('td.rate-content-cash').eq(0).text();
        const cash_sell = $(this).find('td.rate-content-cash').eq(1).text();
        const spot_buy =  $(this).find('td.rate-content-sight').eq(0).text();
        const spot_sell =  $(this).find('td.rate-content-sight').eq(1).text();

        USD_cash_trade.push({
            date: date,
            buy: cash_buy,
            sell: cash_sell,
        });
        USD_spot_trade.push({
            date: date,
            buy: spot_buy,
            sell: spot_sell,
        });
    });
    console.log({
        "month": "12",
        "data": USD_cash_trade,
        "spot": USD_spot_trade

    });
  })
  .catch(function(err){
    //handle error
  });

