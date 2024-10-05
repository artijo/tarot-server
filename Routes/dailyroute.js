const express = require('express');
const router = express.Router();

const { Dailypredictions } = require('../Controllers/predicdaily');

router.get('/predicdaily',Dailypredictions);

module.exports = router