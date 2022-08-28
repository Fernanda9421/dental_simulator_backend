const {
  Attendance,
  Installment,
  Treatment,
  Client,
} = require("../database/models");

const allAtendances = async () => {
  const installments = await Installment.findAll({
    include: [
      {
        model: Attendance,
        as: "attendances",
        include: [
          { model: Treatment, as: "treatments" },
          { model: Client, as: "clients" },
        ],
      },
    ],
  });

  if (!installments) {
    return {
      error: {
        code: 'notFound',
        message: 'Payments not found!',
      },
    };
  }

  return installments;
};

module.exports = { allAtendances };
