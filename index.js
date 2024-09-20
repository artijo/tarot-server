import express from 'express';
import bodyParser from 'body-parser';

import testRoute from './Routes/test.js';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/test', testRoute);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});