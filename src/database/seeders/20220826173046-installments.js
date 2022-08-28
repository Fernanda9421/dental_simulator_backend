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
        installment_value: 179.00,
        due_date: '2021-10-10',
        attendance_id: 4,
      },
      {
        installment_value: 179.00,
        due_date: '2021-11-10',
        attendance_id: 4,
      },
      {
        installment_value: 430.00,
        due_date: '2021-08-02',
        attendance_id: 5,
      },
      {
        installment_value: 290.00,
        due_date: '2020-02-13',
        attendance_id: 6,
      },{
        installment_value: 290.00,
        due_date: '2020-02-13',
        attendance_id: 6,
      },{
        installment_value: 358.00,
        due_date: '2022-03-21',
        attendance_id: 7,
      },
    ], { timestamps: false }),

  down: async (queryInterface) => queryInterface.bulkDelete('installments', null, {}),
};