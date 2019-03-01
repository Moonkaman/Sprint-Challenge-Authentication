const db = require('../dbConfig');

module.exports = {
  get,
  insert,
  findBy
}

function get(id) {
  if(id) {
    return db('users').where({id: id}).first();
  } else {
    return db('users');
  }
}

function insert(user) {
  return db('users').insert(user)
    .then(id => {
      return get(id[0]);
    })
}

function findBy(filter) {
  return db('users').where(filter).first();
}