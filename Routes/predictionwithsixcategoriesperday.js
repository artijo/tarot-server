const express = require('express');
const router = express.Router();

const { Predictions } = require('../Controllers/predictionwithsixcategoriesperdayController');

router.get('/', Predictions);

module.exports = router