1. return {
                    locates: locates + '一共' + $('.font16 .banner > a', options).length + '間',
                    shop_info: shop_info,

                }

{ locates: '澎湖縣一共28間',
  shop_info:
  { shop_no:
        '113506113883120467130095142869151391153869153892166740181750184140188201195081195483880590892571900762900795901891909574911083922201930545941202941833951106981750987806' } } ]

2. return {
                    locates: locates + '一共' + $('.font16 .banner > a', options).length + '間',
                    shop_info: shop_info[0].shop_no,

                }

  { locates: '澎湖縣一共28間',
    shop_info:
        '113506113883120467130095142869151391153869153892166740181750184140188201195081195483880590892571900762900795901891909574911083922201930545941202941833951106981750987806' } ]


3. return {
                    locates: locates + '一共' + $('.font16 .banner > a', options).length + '間',
                    shop_info: shop_info.map(function(it) {
                        return it.shop_no
                    }),

                }

  { locates: '澎湖縣一共28間',
    shop_info:
      [ '113506113883120467130095142869151391153869153892166740181750184140188201195081195483880590892571900762900795901891909574911083922201930545941202941833951106981750987806' ] } ]