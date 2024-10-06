const express = require('express')
const { testmiddleware } = require('../Middlewares/testMiddleware');
const colorContro = require('../Controllers/colorController');
const router = express.Router();

router.get('/', colorContro.testcolor);
router.get('/insert', colorContro.InsertColor);
router.get('/showall', colorContro.showall);
router.post('/insert/colors', colorContro.InsertColors);
router.delete('/delete/:id', colorContro.deleteColors);

module.exports = router;