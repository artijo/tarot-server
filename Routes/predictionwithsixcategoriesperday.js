const express = require('express');
const router = express.Router();

const { Predictions, createPrediction, getPredictionByUser } = require('../Controllers/predictionwithsixcategoriesperdayController');

router.get('/prediction', Predictions);
router.post('/prediction', createPrediction);
router.post('/prediction/user', getPredictionByUser);

module.exports = router