const express = require('express');
const router = express.Router();

const { Dailypredictions,addDailyPredictions } = require('../Controllers/predicdaily');

router.post('/predicdaily/:datename',Dailypredictions);
router.post('/addpredicdaily',addDailyPredictions);

module.exports = router