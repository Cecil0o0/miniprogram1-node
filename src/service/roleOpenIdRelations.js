const db = require('../db-driver')

function getRoleOpenIdRelations() {
  return db.get('roleOpenIdRelations')
}

function getRoleOpenIdRelation(roleOpenIdRelation) {
  return db.get('roleOpenIdRelations').find(roleOpenIdRelation).value()
}

function addRoleOpenIdRelation(roleOpenIdRelation) {
  if (!roleOpenIdRelation) return
  return db.get('roleOpenIdRelations').insert(roleOpenIdRelation).write()
}

function removeRoleOpenIdRelation(id) {
  if (!id) return
  return db.get('roleOpenIdRelations').removeById(id).write()
}

function updateRoleOpenIdRelation(roleOpenIdRelation) {
  if (!roleOpenIdRelation) return
  return db.get('roleOpenIdRelations').updateWhere({ id: roleOpenIdRelation.id }, roleOpenIdRelation).write()
}

module.exports = {
  getRoleOpenIdRelations,
  getRoleOpenIdRelation,
  addRoleOpenIdRelation,
  removeRoleOpenIdRelation,
  updateRoleOpenIdRelation
}
