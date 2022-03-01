const express = require('express');
const session = require('express-session');
const usersRouter = require('./users/users-router');
const authRouter = require('./auth/auth-router');
const server = express();

const sessionConfig = {
    name: 'bloom_gp_auth1',
    secret: 'keep it secret, keep it safe!',
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
      secure: false,
      httpOnly: true,
    },
    resave: false,
    saveUnitialized: false,
  };
  
server.use(session(sessionConfig));

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ api: 'up' });
});

server.get('/user', usersRouter);
server.get('/auth', authRouter);

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    })
  })
  
  module.exports = server