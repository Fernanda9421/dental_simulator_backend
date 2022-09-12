'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => queryInterface.bulkInsert('attendances',
    [
      {
        attendance_date: '2022-03-27',
        treatment_id: 2,
        client_id: 8,
      },
      {
        attendance_date: '2022-08-24',
        treatment_id: 9,
        client_id: 1,
      },
      {
        attendance_date: '2022-05-20',
        treatment_id: 11,
        client_id: 6,
      },
      {
        attendance_date: '2021-10-10',
        treatment_id: 8,
        client_id: 4,
      },
      {
        attendance_date: '2022-08-02',
        treatment_id: 2,
        client_id: 2,
      },
      {
        attendance_date: '2022-02-13',
        treatment_id: 6,
        client_id: 3,
      },
      {
        attendance_date: '2022-03-21',
        treatment_id: 10,
        client_id: 9,
      },
    ], { timestamps: false }),

  down: async (queryInterface) => queryInterface.bulkDelete('attendances', null, {}),
};