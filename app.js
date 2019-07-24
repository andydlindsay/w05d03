const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const villainsRouter = require('./routes/villains');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.set('view engine', 'ejs');

app.use('/villains', villainsRouter);

app.listen(3000, () => {
  console.log('app is listening on port 3000');
});
