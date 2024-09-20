import express from 'express';

// Import the controller
import { TestController } from '../Controllers/testController.js';

// import the middleware
import { testmiddleware } from '../Middlewares/testMiddleware.js';


const router = express.Router();

// Use middleware and controller
router.get('/', testmiddleware ,TestController);

export default router;