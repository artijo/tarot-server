const private_predict = require('../Models/Private_predict')
function InsertAnswer(req, res) {
    const newAnswer = new private_predict({
        massage:[{
            question:"",
            asn:"kuy"
        }]     
    });
    newAnswer.save().then((result) => {
        res.send(result);
    }).catch((error) => {
        res.send(error);
    });
}
function getAll(req,res){
    private_predict.find().then((result) => {
        res.send(result);
    }).catch((error) => {
        res.send(error);
    }
    );
}
function Insertquestion(req, res) {
    const data = req.body
    const newQuestion = new private_predict({
        massage:[{
            question: data.question,
            asn:""
        }]     
    });
    newQuestion.save().then((result) => {
        res.send(result);
    }).catch((error) => {
        res.send(error);
    });
}
module.exports = {InsertAnswer, getAll,Insertquestion};
