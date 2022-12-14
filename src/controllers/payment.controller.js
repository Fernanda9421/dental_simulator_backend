const payment = require('../services/payment.service');

const allAtendances = async (_req, res, next) => {
  try {
    const payments = await payment.allAtendances();

    if (payments.error) return next(payments.error);

    return res.status(200).json(payments);
  } catch (error) {
    next(error);
  }
};

const findByDate = async (req, res, next) => {
  try {
    const { startDate, endDate } = req.body;
    const payments = await payment.findByDate({ startDate, endDate });

    return res.status(200).json(payments);
  } catch (error) {
    next(error);
  }
};

module.exports = { allAtendances, findByDate };
