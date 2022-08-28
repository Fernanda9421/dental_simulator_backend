const express = require('express');

const router = express.Router();
const payment = require('../controllers/payment.controller');

router.get('/', payment.allAtendances);

module.exports = router;
