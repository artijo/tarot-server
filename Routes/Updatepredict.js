const express = require('express');
const router = express.Router();

const updatepredict = require('../Controllers/UpdatepredictController')
router.put('/',updatepredict)
module.exports = router

