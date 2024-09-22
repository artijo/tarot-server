const sixCategories = require('../Assets/sixCategories.json');

const getRandomPredictions = () => {
    let Predictions = {
        love: {
            single:'',
            loveCouples:''
        },
        career: '',
        finance: '',
        health: '',
        education: '',
        travelLuck: ''
    }

    Predictions.love.single = sixCategories.love.single[Math.floor(Math.random() * sixCategories.love.single.length)];
    Predictions.love.loveCouples = sixCategories.love.lovePredictionsCouples[Math.floor(Math.random() * sixCategories.love.lovePredictionsCouples.length)];
    Predictions.career = sixCategories.careerPredictions[Math.floor(Math.random() * sixCategories.careerPredictions.length)];
    Predictions.finance = sixCategories.financePredictions[Math.floor(Math.random() * sixCategories.financePredictions.length)];
    Predictions.health = sixCategories.healthPredictions[Math.floor(Math.random() * sixCategories.healthPredictions.length)];
    Predictions.education = sixCategories.educationPredictions[Math.floor(Math.random() * sixCategories.educationPredictions.length)];
    Predictions.travelLuck = sixCategories.travelLuckPredictions[Math.floor(Math.random() * sixCategories.travelLuckPredictions.length)];

    return Predictions;
}

module.exports = { getRandomPredictions }