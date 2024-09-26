const express = require('express');

// Import the controller
const {TestController, InsertUser, getAllUsers} = require('../Controllers/testController');

// import the middleware
const { testmiddleware } = require('../Middlewares/testMiddleware');


const router = express.Router();

// Use middleware and controller
router.get('/', testmiddleware ,TestController);
router.post('/insert', InsertUser);
router.get('/getall', getAllUsers);

module.exports = router;