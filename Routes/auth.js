const express = require('express');
const { LoginwithGoogle } = require('../Controllers/userController');
const router = express.Router();

router.post('/login', LoginwithGoogle);

module.exports = router;