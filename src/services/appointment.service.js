const {
  Attendance,
  Treatment,
  Client,
} = require("../database/models");

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

module.exports = { allAppointments };
