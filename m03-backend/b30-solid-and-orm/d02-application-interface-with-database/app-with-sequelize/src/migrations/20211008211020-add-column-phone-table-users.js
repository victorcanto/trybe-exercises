'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 'phone-num', {
      type: Sequelize.STRING,
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.removeColumn('Users', 'phone-num');
  },
};
