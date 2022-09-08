module.exports = (err, _req, res, _next) => {
  if (err.code) {
    const statusByErrorCode = {
      notFound: 404,
      alreadyExists: 409,
    };

    const status = statusByErrorCode[err.code] || 500;

    return res.status(status).json(err);
  };

  console.log(err.message);
  return res.status(500).json({ message: 'Internal server error' });
};
