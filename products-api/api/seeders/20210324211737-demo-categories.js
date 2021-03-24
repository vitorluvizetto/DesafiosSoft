'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categorias', [{
      nome: 'Perecivel',
      status: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Não Perecivel',
      status: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Eletrônico',
      status: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categorias', null, {});
  }
};
