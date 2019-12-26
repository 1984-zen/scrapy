const cheerio = require('cheerio');
const rp = require('request-promise');
const url = 'https://www.ibon.com.tw/retail_inquiry.aspx#gsc.tab=0';
const shopsInfo = require('./shopsInfo');
rp(url)
    .then(function(html) {
        //success!
        const $ = cheerio.load(html);
        const locates = [];
        // const body = $('body').html();
        // console.log(body);
        $('.searchmap p').each(function(i,el) {
            locates.push($(this).text())
        })
        
        return Promise.all(
            locates.map(function(locates) {
                return shopsInfo(locates)
            })
        );
    })
    .then(function(shopsInfo) {
        console.log(shopsInfo);
    })
    .catch(function(err) {
        //handle error
        console.log(err);
      });
   

// rp(options)
//     .then(function (parsedBody) {
//         // POST succeeded...
//         console.log(parsedBody)
//     });
//     .catch(function (err) {
//         // POST failed...
//         console.log('error')
//     });



// var options = {
//     method: 'POST',
//     uri: 'https://www.ibon.com.tw/retail_inquiry_ajax.aspx',
//     formData: {
//         strTargetField: 'COUNTY',
//         strKeyWords: '宜蘭縣',
//     },
//     headers: {
//         Accept: 'text/html, */*',
//         Connection: 'keep-alive',
//         'Content-Type': 'application/x-www-form-urlencoded'
//     },
// };