const path = require('path')
const { initDB } = require('./util')

module.exports = initDB(path.resolve(__dirname, '../../db/index.json'))
