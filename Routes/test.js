const express = require('express');

// Import the controller
const {TestController} = require('../Controllers/testController');

// import the middleware
const { testmiddleware } = require('../Middlewares/testMiddleware');


const router = express.Router();

// Use middleware and controller
router.get('/', testmiddleware ,TestController);

module.exports = router;