'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {

    return queryInterface.bulkInsert('Users', [{
      first_name: 'Ailin',
      last_name: 'Liou',
      nick_name: 'alincode',
      bio: 'bio',
    }], {});

    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: function(queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
