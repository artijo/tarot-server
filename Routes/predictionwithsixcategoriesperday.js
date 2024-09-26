const express = require('express');
const router = express.Router();

const { Predictions } = require('../Controllers/predictionwithsixcategoriesperdayController');

router.get('/prediction', Predictions);

module.exports = router