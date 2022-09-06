const addMonths = (numOfMonths, date = new Date()) => {
  date.setMonth(date.getMonth() + numOfMonths);

  return date;
};

module.exports = { addMonths };
