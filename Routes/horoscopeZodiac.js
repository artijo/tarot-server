const express = require('express');
const router = express.Router();
const horoscopeController = require('../Controllers/horoscopeZodiacController');

router.get('/', horoscopeController.getZodiacHoroscope);
router.post('/insert', horoscopeController.createZodiacHoroscope);
router.put('/:id', horoscopeController.updateZodiacHoroscope);


module.exports = router;