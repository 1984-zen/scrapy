const Sequelize = require('sequelize');

module.exports = sequelize.define('User', {
    id: {
        type: sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: sequelize.STRING(35),
        allowNull: false,
        unique: true,
    },
    password: {
        type: sequelize.STRING(20),
        allowNull: false,
    },
    createdAt: {
        type: sequelize.DATE 
      },
      updatedAt: {
        type: sequelize.DATE
      },
});