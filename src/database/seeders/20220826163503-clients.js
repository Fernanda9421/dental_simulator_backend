'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => queryInterface.bulkInsert('clients',
    [
      {
        full_name: 'Rodrigo Santoro',
      },
      {
        full_name: 'Wagner Moura',
      },
      {
        full_name: 'Lázaro Ramos',
      },
      {
        full_name: 'Larissa Manoela',
      },
      {
        full_name: 'Paolla Oliveira',
      },
      {
        full_name: 'Tony Ramos',
      },
      {
        full_name: 'Daniel Furlan',
      },
      {
        full_name: 'Ivete Sangalo',
      },
      {
        full_name: 'Isadora Cruz',
      },
    ], { timestamps: false }),

  down: async (queryInterface) => queryInterface.bulkDelete('clients', null, {}),
};