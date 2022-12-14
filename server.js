const express = require('express');
const dotenv = require('dotenv');

const bootcamps = require('./routes/bootcamps');
const morgan = require('morgan');

dotenv.config({
  path: './config/config.env',
});

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/bootcamps', bootcamps);

app.listen(
  process.env.PORT || 5000,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${process.env.PORT}`,
  ),
);
