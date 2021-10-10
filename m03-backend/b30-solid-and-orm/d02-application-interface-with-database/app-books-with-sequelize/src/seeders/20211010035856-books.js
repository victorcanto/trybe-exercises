'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Books',
      [
        {
          title: 'Código limpo',
          author: 'Robert Cecil',
          pageQuantity: 82,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          title: 'Eloquent Javascript',
          author: ' Marijn Haverbeke',
          pageQuantity: 1,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Books', null, {});
  },
};
