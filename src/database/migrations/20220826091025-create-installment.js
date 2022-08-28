'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('installments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      installmentValue: {
        type: Sequelize.DECIMAL(9,2),
        allowNull: false,
        field: 'installment_value',
      },
      dueDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        field: 'due_date',
      },
      attendanceId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'attendance_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'clients',
          key: 'id',
        },
      },
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('installments');
  }
};