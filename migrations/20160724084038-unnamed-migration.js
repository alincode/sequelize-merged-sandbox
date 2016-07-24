'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Users',
      'nick_name',
      Sequelize.STRING
    )
  },

  down: function(queryInterface, Sequelize) {}
};
