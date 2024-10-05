const sixCategories = require("../Assets/sixCategories.json");
const dailyModel = require("../Models/Datedaily");
function Dailypredictions(req, res) {
  let now = new Date();
  let datename = req.params.datename;
  console.log(datename);
  now.setHours(0, 0, 0, 0);
  now.setDate(now.getDate() + 1);
  //   console.log(now);

  dailyModel
    .find(
      {
        date: {
          $eq: now,
        },
        datename: datename
      },
      {
        _id: 0,
      }
    )
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
}

function addDailyPredictions(req, res) {
  let today = new Date();
  today.setHours(0, 0, 0, 0);
  today.setDate(today.getDate() + 1);
  let data = req.body;
  console.log(data);
  const newdailypredictions = new dailyModel({
    datename: data.datename,
    date: data.date,
    prediction: data.prediction,
  });
  newdailypredictions
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
}

module.exports = { Dailypredictions, addDailyPredictions };
