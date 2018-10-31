const db = require('../db-driver')

function addWechatTemplateId(wechatTemplateId) {
  if (!wechatTemplateId) return
  return db.get('wechatTemplateIds').insert(wechatTemplateId).write()
}

module.exports = {
  addWechatTemplateId
}
