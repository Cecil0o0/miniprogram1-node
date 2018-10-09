const lowdb = require('lowdb')
const lodashId = require('lodash-id')
const FileSync = require('lowdb/adapters/FileSync')
const path = require('path')

const adapter = new FileSync(path.resolve(__dirname, '../../db/index.json'))
const db = lowdb(adapter)

// 使用id based resources
db._.mixin(lodashId)

// 自定义id
db.createId((collectionName, item) => `${collectionName}-${item.prop}-${Date.now()}`)

module.exports = db
