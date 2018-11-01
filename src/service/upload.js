const db = require('../db-driver')
const upload = require('../utils/upload')
const { pick } = require('../utils/helper')

async function uploadFile(id, file) {
  await upload(file)
  const video = pick(file, ['name', 'type', 'size', 'lastModifiedDate'])
  await db
    .get('models')
    .updateWhere(
      {
        id
      },
      {
        video
      }
    )
    .write()
  return true
}

module.exports = {
  uploadFile
}
