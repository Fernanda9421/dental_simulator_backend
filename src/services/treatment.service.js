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

module.exports = {
  getAllTreatments,
  getTreatmentByName,
};
