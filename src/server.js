const express = require('express');
const { json, urlencoded } = require('body-parser');
const morgan = require('morgan');
const config = require('./config.js');
const cors = require('cors');
const jwt = require('express-jwt');
const jsonwebtoken = require('jsonwebtoken');

const persimon = require('./utils/persimon');
const db = persimon('/assets/users.json');

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
    const secretToken = 'picturest';

    app.post('/login', (req, res) => {
      //validate user: email, password using db.all();

      const { email, password } = req.body;

      const users = db.all();

      const user = users.find((user) => {
        return user.email === email && user.password === password;
      });

      if (user) {
        const accesToken = jsonwebtoken.sign(
          {
            email: user.email,
            password: user.password,
          },
          secretToken
        );
        res.send(accesToken);
      } else {
        res.send('Email or password incorrect');
      }
    });

    app.get(
      '/protected',
      jwt({ secret: secretToken, algorithms: ['HS256'] }),
      (req, res) => {
        res.send('protected');
      }
    );

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
