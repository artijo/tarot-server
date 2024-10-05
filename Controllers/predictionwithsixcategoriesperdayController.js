const { getRandomPredictions } = require('../helper/randomPrediction');
const sixcategoriesHistoryModel = require('../Models/SixcategoriesHistory');
const userModel = require('../Models/User');

function Predictions (req, res) {
    res.json(getRandomPredictions());
}

function createPrediction(req, res) {
    const { email, prediction } = req.body;
    userModel.findOne({ email }).then((user) => {
        if (user) {
            const newPrediction = new sixcategoriesHistoryModel({
                User: user._id,
                prediction
            });
            newPrediction.save().then((prediction) => {
                res.json(prediction);
            });
        } else {
            res.json({ message: 'User not found' });
        }
    });
}

function getPredictionByUser(req, res) {
    const { email } = req.body;
    userModel.findOne({ email }).then((user) => {
        if (user) {
            sixcategoriesHistoryModel.find({ User: user._id }).then((prediction) => {
                res.json(prediction);
            });
        } else {
            res.json({ message: 'User not found' });
        }
    });
}

module.exports = { Predictions, createPrediction, getPredictionByUser };