const { request } = require("http");
const sixCategories = require("../Assets/sixCategories.json");
const dailyModel = require("../Models/Datedaily");
const { getRandomPredictions } = require("../helper/randomPrediction");
const { Console } = require("console");

function Dailypredictions(req, res) {
  let now = new Date();
  let datename = req.params.datename;
  console.log(datename);
  now.setHours(0, 0, 0, 0);
  now.setDate(now.getDate() + 1);
  dailyModel
    .find(
      {
        date: {
          $eq: now,
        },
        datename: datename,
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
  //   console.log(data);
  let predictiondata = {
    love: {
      single: req.body.prediction.love.single,
      loveCouples: req.body.prediction.love.loveCouples,
    },
    career: req.body.prediction.career,
    finance: req.body.prediction.finance,
    health: req.body.prediction.health,
    education: req.body.prediction.education,
    travelLuck: req.body.prediction.travelLuck,
  };

  const newdailypredictions = new dailyModel({
    datename: data.datename,
    date: data.date,
    prediction: predictiondata,
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

function addDailyPredictionsFast(req, res) {
  let weekly = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let now = new Date();
  let count = 0;
  var datetocreatedata;
  now.setHours(0, 0, 0, 0);
  now.setDate(now.getDate() + 1);
  // console.log(weekly);
  if (Object.keys(req.body).length !== 0) {
    // console.log(req.body.date,"herrrrrrrrrrrr");
    
    var dateinput = new Date(req.body.date);
    dateinput.setHours(0, 0, 0, 0);
    dateinput.setDate(dateinput.getDate()+1);
    // console.log(dateinput);
    if (dateinput !== null) {
      if (dateinput.getDate() - now.getDate() >= 0) {
        datetocreatedata = dateinput;
        // console.log("datetocreatedata is created",datetocreatedata);
      }
    }
  } else {
    datetocreatedata = now
    console.log("No date input");
  }
  
  let dailyPredictions = dailyModel
    .find(
      {
        date: {
          $eq: datetocreatedata,
        },
      },
      {
        _id: 0,
      }
    )
    .then((predictions) => {
      if (predictions.length == 0) {
        weekly.forEach((element) => {
          let predictiondata = getRandomPredictions();
          let newdailyPredictions = new dailyModel({
            datename: element,
            date: datetocreatedata !== null ? datetocreatedata : now,
            prediction: predictiondata,
          });
          // console.log(newdailyPredictions)
          newdailyPredictions
            .save()
            .then((result) => {
              count++;
              if (count === weekly.length) {
                res.send("All predictions saved");
              }
            })
            .catch((err) => {
              res.send(err);
            });
        });
      } else {
        let datetocreatedata = [];

        predictions.forEach((element) => {
          datetocreatedata.push(element.datename);
        });

        let difference = weekly.filter(
          (diff) => !datetocreatedata.includes(diff)
        );
        if (difference.length == 0) {
          res.send("All predictions are already saved");
        } else {
          difference.forEach((element) => {
            let predictiondata = getRandomPredictions();
            let newdailyPredictions = new dailyModel({
              datename: element,
              date: datetocreatedata !== null ? datetocreatedata : now,
              prediction: predictiondata,
            });
            newdailyPredictions
              .save()
              .then((result) => {
                count++;
                if (count === difference.length) {
                  res.send("All predictions saved");
                }
              })
              .catch((err) => {
                res.send(err);
              });
          });
        }
      }
    })
    .catch((err) => {
      res.send(err);
    });
}

module.exports = {
  Dailypredictions,
  addDailyPredictions,
  addDailyPredictionsFast,
};
