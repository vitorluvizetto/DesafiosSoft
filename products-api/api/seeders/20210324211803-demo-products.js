'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Produtos', [{
      nome: 'PS4',
      preco: 400.00,
      categoria_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Frango',
      preco: 8.00,
      categoria_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Farinha',
      preco: 3.00,
      categoria_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Produtos', null, {});
  }
};
