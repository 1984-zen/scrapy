'use strict';

module.exports = {
  up: (queryInterface, sequelize) => {
    return queryInterface.createTable('stores',{
      id: {
        type: sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    content: sequelize.STRING(300),
    userId: {
      type: sequelize.INTEGER(11),
      references: {
        model: '20191213122129-create_users_table',
        key: 'id'
    },
    },
    createdAt: {
      type: sequelize.DATE 
    },
    updatedAt: {
      type: sequelize.DATE
    },

    });
  },

  down: (queryInterface, sequelize) => {
    return queryInterface.dropTable('stores');
  }
};
