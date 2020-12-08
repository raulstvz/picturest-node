const express = require('express');
const { json, urlencoded } = require('body-parser');
const morgan = require('morgan');
const config = require('./config.js');
const cors = require('cors');

const app = express();

const pinsRouter = require('./resources/pins/pins.router');
const boardsRouter = require('./resources/boards/boards.router');
const usersRouter = require('./resources/users/users.router');

app.disable('x-powered-by');

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/api/pins', pinsRouter);
app.use('/api/boards', boardsRouter);
app.use('/api/users', usersRouter);

const start = async () => {
  try {
    app.listen(config.port, () => {
      console.log(`REST API on http://localhost:${config.port}`);
    });
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  start,
  app,
};
