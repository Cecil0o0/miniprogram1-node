const fs = require('fs')

module.exports = (file) => {
  const folder = __dirname + '/../../live/upload'
  const path = `${folder}/${file.name}`
  return new Promise((resolve, reject) => {
    let ws = fs.createWriteStream(path)
    fs.createReadStream(file.path).pipe(ws)
    ws.on('finish', resolve.bind(this, true))
    ws.on('error', e => { throw new Error(e) })
  })
}
