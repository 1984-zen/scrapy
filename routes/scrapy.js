let express = require('express');
let router = express.Router();

let $ = require('cheerio');
let rp = require('request-promise');

router.get('/ibon', (req, res, next) => {

    const url = 'https://www.ibon.com.tw/retail_inquiry.aspx#gsc.tab=0';
    const shopsInfo = require('../shopsInfo');

    rp(url)
    .then(function (html) {
        //success!
        const cheerio = require('cheerio');
        const $ = cheerio.load(html);
        const locates = [];
        // const body = $('body').html();
        // console.log(body);
        $('.searchmap p').each(function (i, el) {
            locates.push($(this).text())
        });

        return Promise.all(
            locates.map(function (locates) {
                return shopsInfo(locates)
            })
        );
    })
    .then(function (shopsInfo) {
        res.json(shopsInfo);
    })
    .catch(function (err) {
        //handle error
        console.log(err);
    });
})

router.get('/exchangeRate', (req, res, next) => {
    
    const url = 'https://rate.bot.com.tw/xrt/quote/2019-12/USD';

    rp(url)
        .then(function (html) {
            //success!
            const statsTable = $('table tbody > tr', html);
            const USD_cash_trade = [];
            const USD_spot_trade = [];

            statsTable.each(function () {
                const date = $(this).find('td > a').text();
                const cash_buy = $(this).find('td.rate-content-cash').eq(0).text();
                const cash_sell = $(this).find('td.rate-content-cash').eq(1).text();
                const spot_buy = $(this).find('td.rate-content-sight').eq(0).text();
                const spot_sell = $(this).find('td.rate-content-sight').eq(1).text();

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
            res.json({
                "month": "12",
                "data": USD_cash_trade,
                "spot": USD_spot_trade

            });
        })
        .catch(function (err) {
            //handle error
        });
})

module.exports = router;