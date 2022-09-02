const appointment = require('../services/appointment.service');

const allAppointments = async (_req, res, next) => {
  try {
    const appointments = await appointment.allAppointments();

    return res.status(200).json(appointments);
  } catch (error) {
    next(error);
  }
};

module.exports = { allAppointments };
