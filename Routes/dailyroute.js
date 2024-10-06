const express = require('express');
const router = express.Router();

const { Dailypredictions,addDailyPredictions,addDailyPredictionsFast} = require('../Controllers/predicdaily');

router.get('/predicdaily/:datename',Dailypredictions);
router.post('/addpredicdaily',addDailyPredictions);
router.post('/addpredicdailyfast',addDailyPredictionsFast);

module.exports = router