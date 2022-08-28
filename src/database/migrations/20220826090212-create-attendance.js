"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("attendances", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      attendanceDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        field: "attendance_date",
      },
      treatmentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: "treatment_id",
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: {
          model: "treatments",
          key: "id",
        },
      },
      clientId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: "client_id",
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: {
          model: "clients",
          key: "id",
        },
      },
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable("attendances");
  },
};
