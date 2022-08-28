'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => queryInterface.bulkInsert('treatments',
    [
      {
        name: 'Prótese Removível',
        total_price: 580.00,
      },
      {
        name: 'Prótese Fixa',
        total_price: 950.00,
      },
      {
        name: 'Dentatura',
        total_price: 625.90,
      },
      {
        name: 'Coroa',
        total_price: 250.00,
      },
      {
        name: 'Ponte',
        total_price: 430.00,
      },
      {
        name: 'Branqueamento',
        total_price: 240.00,
      },
      {
        name: 'Restauração',
        total_price: 1020.00,
      },
      {
        name: 'Extração de dente',
        total_price: 94.00,
      },
      {
        name: 'Desvitalização',
        total_price: 358.00,
      },
      {
        name: 'Ortodontia',
        total_price: 873.00,
      },
      {
        name: 'Aparelhos dentários',
        total_price: 2893.90,
      }
    ], { timestamps: false }),

  down: async (queryInterface) => queryInterface.bulkDelete('treatments', null, {}),
};