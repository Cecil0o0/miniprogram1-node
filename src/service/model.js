const db = require('../db-driver')

function getModels(cloneDeep = false) {
  let models = db.get('models')
  if (cloneDeep) {
    return models.cloneDeep().value()
  } else {
    return models.value()
  }
}

function getModel(id) {
  return db.get('models').find({ id }).cloneDeep().value()
}

function addModel(model) {
  if (!model) return
  return db.get('models').insert(model).write()
}

function removeModel(id) {
  if (!id) return
  return db.get('models').removeById(id).write()
}

function updateModel(model) {
  if (!model) return
  return db.get('models').updateWhere({ id: model.id }, model).write()
}

module.exports = {
  getModels,
  getModel,
  addModel,
  removeModel,
  updateModel
}
