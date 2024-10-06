const express = require('express');
const router = express.Router();

const {InsertAnswer,getAll,Insertquestion, getallPrivatePrediction, answerQuesion} = require('../Controllers/privatepredict')

router.post('/insertans',InsertAnswer)
router.post('/insertquestion',Insertquestion)
router.post('/getAll',getAll)
router.get('/getall',getallPrivatePrediction)
router.put('/update',answerQuesion)
module.exports = router