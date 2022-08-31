const express = require('express');

const router = express.Router();
const payment = require('../controllers/payment.controller');

router.get('/', payment.allAtendances);
router.post('/', payment.findByDate);

module.exports = router;
