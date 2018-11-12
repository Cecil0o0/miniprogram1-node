const db = require('../db-driver')

function getUsers() {
  return db.get('users')
}

function getUser(id) {
  return db.get('users').find({ id }).value()
}

function getUserByEntry(user) {
  return db.get('users').find(user).value()
}

function addUser(user) {
  if (!user) return
  return db.get('users').insert(user).write()
}

function removeUser(id) {
  if (!id) return
  return db.get('users').removeById(id).write()
}

function updateUser(user) {
  if (!user) return
  return db.get('users').updateWhere({ id: user.id }, user).write()
}

module.exports = {
  getUsers,
  getUser,
  addUser,
  removeUser,
  updateUser,
  getUserByEntry
}
