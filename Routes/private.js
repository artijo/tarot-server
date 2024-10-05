const express = require('express');
const router = express.Router();

const {InsertAnswer,getAll,Insertquestion} = require('../Controllers/privatepredict')

router.post('/insertans',InsertAnswer)
router.post('/insertquestion',Insertquestion)
router.post('/getAll',getAll)
module.exports = router