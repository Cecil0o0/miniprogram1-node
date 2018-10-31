const db = require('../db-driver')

function getAdvices() {
  return db.get('advices')
}

function getAdvice(id) {
  return db.get('advices').find({ id }).value()
}

function addAdvice(advice) {
  if (!advice) return
  return db.get('advices').insert(advice).write()
}

function removeAdvice(id) {
  if (!id) return
  return db.get('advices').removeById(id).write()
}

function updateAdvice(advice) {
  if (!advice) return
  return db.get('advices').updateWhere({ id: advice.id }, advice).write()
}

module.exports = {
  getAdvices,
  getAdvice,
  addAdvice,
  removeAdvice,
  updateAdvice
}
