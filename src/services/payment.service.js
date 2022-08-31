const {
  Attendance,
  Installment,
  Treatment,
  Client,
} = require("../database/models");
const { Op } = require('sequelize');

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
    order: [
      ['dueDate', 'ASC'],
    ],
  });

  if (installments.length === 0) {
    return {
      error: {
        code: 'notFound',
        message: 'Payments not found!',
      },
    };
  }

  return installments;
};

const findByDate = async ({ startDate, endDate }) => {
  const installments = await Installment.findAll({
    where : {
      "dueDate": {
        [Op.between] : [startDate , endDate],
      },
    },
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
    order: [
      ['dueDate', 'ASC'],
    ],
  });

  return installments;
}

module.exports = { allAtendances, findByDate };
