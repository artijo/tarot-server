
//Ohm
const express = require('express');
const router = express.Router();

//Controller
const { randomTarotCard ,getPicture} = require('../Controllers/randomCardController');


router.get('/tarotCardImage/:img/:deck/:imageName', getPicture);
// router.get('/test',testMoogoose);


router.post('/randomPost',randomTarotCard);
// router.post('/',randomTarotCard)

module.exports = router