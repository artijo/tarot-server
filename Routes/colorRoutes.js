const express = require('express')
const { testmiddleware } = require('../Middlewares/testMiddleware');
const colorContro = require('../Controllers/colorController');
const router = express.Router();

router.get('/', colorContro.Testcolor);
router.post('/insert', colorContro.InsertColor);
router.get('/showall', colorContro.getdata);

module.exports = router;