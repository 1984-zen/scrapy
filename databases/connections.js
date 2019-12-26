var SequelizeModule = require('sequelize');

var sequelize = new SequelizeModule('node01', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
  
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
  });

  module.exports = sequelize;
  global.sequelize = sequelize;



var Store = sequelize.define('Store', {
    id: {
        type: SequelizeModule.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    content: SequelizeModule.STRING,
    createdAt: {
        type: SequelizeModule.DATE 
      },
    updatedAt: {
        type: SequelizeModule.DATE
      },
});

module.exports = Store;