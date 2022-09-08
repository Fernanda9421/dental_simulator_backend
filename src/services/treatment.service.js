const { Treatment } = require('../database/models');

const getAllTreatments = async () => {
  const treatments = await Treatment.findAll();

  return treatments;
};

const getTreatmentByName = async (treatmentName) => {
  const treatments = await getAllTreatments();
  const treatmentById = await treatments.find((item) => item.name === treatmentName);

  return treatmentById;
};

const createTreatment = async ({ name, totalPrice }) => {
  const existTreatment = await getTreatmentByName(name);

  if (existTreatment) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'Tratamento já cadastrado!',
      },
    };
  }

  const newTreatment = await Treatment.create({ name, totalPrice });

  return newTreatment;
};

module.exports = {
  getAllTreatments,
  getTreatmentByName,
  createTreatment,
};
