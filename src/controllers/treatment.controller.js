const treatment = require('../services/treatment.service');

const getAllTreatments = async (_req, res, next) => {
  try {
    const treatments = await treatment.getAllTreatments();

    return res.status(200).json(treatments);
  } catch (error) {
    next(error);
  }
};

const createTreatment = async (req, res, next) => {
  try {
    const { name, totalPrice } = req.body;
    const newTreatment = await treatment.createTreatment({ name, totalPrice });

    if (newTreatment.error) return next(newTreatment.error); 

    return res.status(201).json(newTreatment);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllTreatments, createTreatment };
