const db = require('../db-driver')
const upload = require('../utils/upload')
const { pick } = require('../utils/helper')
const config = require('../../config')

async function uploadFile(file) {
  await upload(file)
  const video = pick(file, ['name', 'type', 'size', 'lastModifiedDate'])
  let name = await db.get('uploads').insert(video).write().name
  return `${config.upload.accessPrefix}/upload/${name}`
}

function getUpload(id) {
  return db.get('uploads').find({ id }).value()
}

function getUploads(ids) {
  let uploadsTable = db.get('uploads')

  return ids.map(id => (uploadsTable.find({ id }).value()))
}

module.exports = {
  uploadFile,
  getUpload,
  getUploads
}
