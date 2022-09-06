const {
  Attendance,
  Treatment,
  Client,
  Installment,
} = require("../database/models");

const treatmentService = require('./treatment.service');
const clientService = require('./client.service');
const { addMonths } = require('../utils/addMonth');

const allAppointments = async () => {
  const appointments = await Attendance.findAll({
    include: [
      { model: Treatment, as: "treatments" },
      { model: Client, as: "clients" },
    ],
    order: [
      ['attendanceDate', 'ASC']
    ]
  });

  return appointments;
};

const createAppointment = async ({
  attendanceDate, clientName, treatment, dueDate, installments,
}) => {
  const treatmentByName = await treatmentService.getTreatmentByName(treatment);
  const clientById = await clientService.getClientIdByName(clientName);

  const response = {
    attendanceDate,
    treatmentId: treatmentByName.dataValues.id,
    clientId: clientById,
  };

  const newAppointment = await Attendance.create(response);
  installments.map(async (_item, index) => {
    await Installment.create({
      attendanceId: newAppointment.dataValues.id,
      installmentValue: treatmentByName.dataValues.totalPrice / installments.length,
      dueDate: addMonths(index, new Date(dueDate))
    })
  });

  return newAppointment;
}

module.exports = { allAppointments, createAppointment };
