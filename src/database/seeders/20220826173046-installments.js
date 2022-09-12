'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => queryInterface.bulkInsert('installments',
    [
      {
        installment_value: 475.00,
        due_date: '2022-03-27',
        attendance_id: 1,
      },
      {
        installment_value: 475.00,
        due_date: '2022-04-27',
        attendance_id: 1,
      },
      {
        installment_value: 358.00,
        due_date: '2022-08-24',
        attendance_id: 2,
      },
      {
        installment_value: 578.78,
        due_date: '2022-05-20',
        attendance_id: 3,
      },
      {
        installment_value: 578.78,
        due_date: '2022-06-20',
        attendance_id: 3,
      },
      {
        installment_value: 578.78,
        due_date: '2022-07-20',
        attendance_id: 3,
      },
      {
        installment_value: 578.78,
        due_date: '2022-08-20',
        attendance_id: 3,
      },
      {
        installment_value: 578.78,
        due_date: '2022-09-20',
        attendance_id: 3,
      },
      {
        installment_value: 94.00,
        due_date: '2021-10-10',
        attendance_id: 4,
      },
      {
        installment_value: 316.67,
        due_date: '2022-08-02',
        attendance_id: 5,
      },
      {
        installment_value: 316.67,
        due_date: '2022-09-02',
        attendance_id: 5,
      },
      {
        installment_value: 316.67,
        due_date: '2022-10-02',
        attendance_id: 5,
      },
      {
        installment_value: 240.00,
        due_date: '2022-02-13',
        attendance_id: 6,
      },
      {
        installment_value: 873.00,
        due_date: '2022-03-21',
        attendance_id: 7,
      },
    ], { timestamps: false }),

  down: async (queryInterface) => queryInterface.bulkDelete('installments', null, {}),
};