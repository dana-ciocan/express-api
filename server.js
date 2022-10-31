const express = require('express');
const dotenv = require('dotenv');

const bootcamps = require('./routes/bootcamps');
const logger = require('./middleware/logger');

dotenv.config({
  path: './config/config.env',
});

const app = express();

app.use(logger);

app.use('/api/v1/bootcamps', bootcamps);

app.listen(
  process.env.PORT || 5000,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${process.env.PORT}`,
  ),
);
