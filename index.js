const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');


// import routes here
// const testRoute = require('./Routes/test.js');
const randomCard = require('./Routes/randomCard.js'); //Ohm
const predictionwithsixcategoriesperday = require('./Routes/predictionwithsixcategoriesperday.js');
const updatepredict = require('./Routes/Updatepredict.js')
const privatePredict  = require('./Routes/private.js')
const auth = require('./Routes/auth.js');
const dailyroute = require('./Routes/dailyroute.js');


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));


app.use(cors({
  origin: "http://localhost:5173"
}));

app.get('/', (req, res) => {
  res.send('Hello World!');
});
// use routes here
app.use('/test', testRoute);
app.use('/randomTarot',randomCard); // Ohm
app.use('/prediction', predictionwithsixcategoriesperday);
app.use('/updatepredict',updatepredict)
app.use('/sixcategory', predictionwithsixcategoriesperday);
app.use('/daily', dailyroute)
app.use('/private',privatePredict )
app.use('/auth',auth)



app.listen(3000, () => {
  console.log('Server is running on port 3000');
  // connect to MongoDB
  mongoose.connect('mongodb://mongo:ItLoytZwNHmWsivyoRMQejFgpwcNkdCz@autorack.proxy.rlwy.net:23641',{
  dbName: 'tarot',
  retryWrites: true,
  w: "majority"
})
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((error) => {
      console.log('Error connecting to MongoDB');
    });
});
