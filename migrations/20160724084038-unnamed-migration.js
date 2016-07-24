'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    queryInterface.addColumn(
      'Users',
      'nick_name',
      Sequelize.STRING
    )
  },

  down: function(queryInterface, Sequelize) {}
};
