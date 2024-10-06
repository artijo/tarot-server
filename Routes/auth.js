const express = require('express');
const { LoginwithGoogle,getUser } = require('../Controllers/userController');
const router = express.Router();

router.post('/login', LoginwithGoogle);
router.post('/user', getUser);

module.exports = router;