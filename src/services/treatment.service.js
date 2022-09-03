const { Treatment } = require('../database/models');

const getAllTreatments = async () => {
  const treatments = await Treatment.findAll();

  return treatments;
}

module.exports = { getAllTreatments };
