const express = require('express');

const router = express.Router();
const appointment = require('../controllers/appointment.controller');

router.get('/', appointment.allAppointments);

module.exports = router;
