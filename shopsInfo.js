const rp = require('request-promise');
const cheerio = require('cheerio');


const shopsInfo = function(locates) {
            var locates = locates
            var options = {
                method: 'POST',
                uri: 'https://www.ibon.com.tw/retail_inquiry_ajax.aspx',
                formData: {
                    strTargetField: 'COUNTY',
                    strKeyWords: locates,
                }
            }
            return rp(options)
            .then(function(options) {
            const $ = cheerio.load(options);
            const table = $("table tbody tr", options).slice(1)//從第二筆之後開始;
            const shop_info = [];

            table.each(function(i,ele) {
                const shop_no = $(this).find('td.banner a').text().trim();
                const shop_name = $(this).find('td').eq(1).text().trim();
                const shop_address = $(this).find('td').eq(2).text().trim();

                shop_info.push(
                    {
                    locates: locates,
                    shop_no: shop_no,
                    shop_name: shop_name,
                    shop_address: shop_address,
                
                });    
            })
            return shop_info  
            })
        //       {
        //       locates: locates + '一共' + $('.font16 .banner > a', options).length + '間',
        //       shop_info: shop_info,
        //   }
            .catch(function(err) {
                //handle error
              });
              
};
module.exports = shopsInfo;