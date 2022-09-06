const appointment = require('../services/appointment.service');

const allAppointments = async (_req, res, next) => {
  try {
    const appointments = await appointment.allAppointments();

    return res.status(200).json(appointments);
  } catch (error) {
    next(error);
  }
};

const createAppointment = async (req, res, next) => {
  try {
    const { attendanceDate, clientName, treatment, dueDate, installments } = req.body;

    const newAppointment = await appointment.createAppointment({
      attendanceDate, clientName, treatment, dueDate, installments,
    });

    return res.status(200).json(newAppointment);
  } catch (error) {
    next(error);
  }
};

module.exports = { allAppointments, createAppointment };
