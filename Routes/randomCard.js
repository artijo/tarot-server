
//Ohm
const express = require('express');
const router = express.Router();

//Controller
const { randomTarotCard ,getPicture} = require('../Controllers/randomCardController');

router.get('/random',randomTarotCard)
router.get('/tarotCardImage/:img/:deck/:imageName', getPicture);

module.exports = router