
//Ohm
const express = require('express');
const router = express.Router();

//Controller
const { randomTarotCard ,getPicture, randomPost} = require('../Controllers/randomCardController');

router.post('/',randomTarotCard)
router.get('/tarotCardImage/:img/:deck/:imageName', getPicture);
router.post('/randomPost',randomPost)

module.exports = router