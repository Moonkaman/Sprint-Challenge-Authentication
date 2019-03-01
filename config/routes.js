const axios = require('axios');
const bcrypt = require('bcryptjs');

const { authenticate } = require('../auth/authenticate');
const generateToken = require('./tokenServices');
const db = require('../database/helpers/authDb');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
  server.get('/api/users', getUsers);
};

function register(req, res) {
  if(req.body.username && req.body.password) {
    req.body.password = bcrypt.hashSync(req.body.password, 12);
    db.insert(req.body)
      .then(newUser => {
        const token = generateToken(newUser);
        res.status(201).json({...newUser, token})
      })
  } else {
    res.status(400).json({message: 'Please provide a username and password'});
  }
}

function login(req, res) {
  // implement user login
}

function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  axios
    .get('https://icanhazdadjoke.com/search', requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}

function getUsers(req, res) {
  db.get()
    .then(users => res.status(200).json(users))
    .catch(err => res.status(500).json({message: 'Could not retrieve list of users at this time', err}));
}
