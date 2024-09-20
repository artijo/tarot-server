
//Ohm
const express = require('express');
const router = express.Router();

//Controller
const { randomTarotCard } = require('../Controllers/randomCardController');

router.get('/random',randomTarotCard)

module.exports = router