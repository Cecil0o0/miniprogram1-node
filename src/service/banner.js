const db = require('../db-driver')

function addBanner(banner) {
  if (!banner) return
  return db.get('banners').insert(banner).write()
}

function getBanners() {
  return db.get('banners').value()
}

module.exports = {
  addBanner,
  getBanners
}
