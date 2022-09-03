const treatment = require('../services/treatment.service');

const getAllTreatments = async (_req, res, next) => {
  try {
    const treatments = await treatment.getAllTreatments();

    return res.status(200).json(treatments);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllTreatments };
