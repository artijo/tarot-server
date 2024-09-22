const { getRandomPredictions } = require('../helper/randomPrediction');

function Predictions (req, res) {
    res.json(getRandomPredictions());
}

module.exports = { Predictions };