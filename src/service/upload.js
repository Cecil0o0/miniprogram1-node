const db = require('../db-driver')
const upload = require('../utils/upload')
const { pick } = require('../utils/helper')

async function uploadFile(file) {
  await upload(file)
  const video = pick(file, ['name', 'type', 'size', 'lastModifiedDate'])
  let id = await db.get('uploads').insert(video).write().id
  return id
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
