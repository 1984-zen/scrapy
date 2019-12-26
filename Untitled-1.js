table.each(function(i,ele) {
                console.log(i,ele);
                const shop_no = $(this).find(`td:nth-child(${i})`).text();

                shop_info.push(
                    {
                    shop_no: shop_no,

                })
            });


            .then(function(options) {
                const $ = cheerio.load(options);
                const table = $('table', options).find("tr");
                const shop_info = [];
    
                table.each(function(i,ele) {
                    var current = table[i];
                    var title = $(current).children("td a").text();
                    console.log(title);
                    const shop_no = $(this).children(`td.banner > a`);
    
                    shop_info.push(
                        {
                        shop_no: shop_no,
    
                    })
                });