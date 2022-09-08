const express = require('express');

const router = express.Router();
const treatment = require('../controllers/treatment.controller');

router.get('/', treatment.getAllTreatments);
router.post('/register', treatment.createTreatment);

module.exports = router;
