import express from 'express';

import { TestController } from '../Controllers/testController.js';

const router = express.Router();


router.get('/', TestController);

export default router;