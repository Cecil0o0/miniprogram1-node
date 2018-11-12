const db = require('../db-driver')

function getRoles() {
  return db.get('roles')
}

function getRole(role) {
  return db.get('roles').find(role).value()
}

function addRole(role) {
  if (!role) return
  return db.get('roles').insert(role).write()
}

function removeRole(id) {
  if (!id) return
  return db.get('roles').removeById(id).write()
}

function updateRole(role) {
  if (!role) return
  return db.get('roles').updateWhere({ id: role.id }, role).write()
}

module.exports = {
  getRole,
  getRoles,
  addRole,
  removeRole,
  updateRole
}
