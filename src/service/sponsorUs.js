const db = require('../db-driver')

function getSponsorUss() {
  return db.get('sponsorUss')
}

function getSponsorUs(id) {
  return db.get('sponsorUss').find({ id }).value()
}

function addSponsorUs(sponsorUs) {
  if (!sponsorUs) return
  return db.get('sponsorUss').insert(sponsorUs).write()
}

function removeSponsorUs(id) {
  if (!id) return
  return db.get('sponsorUss').removeById(id).write()
}

function updateSponsorUs(sponsorUs) {
  if (!sponsorUs) return
  return db.get('sponsorUss').updateWhere({ id: sponsorUs.id }, sponsorUs).write()
}

module.exports = {
  getSponsorUss,
  getSponsorUs,
  addSponsorUs,
  removeSponsorUs,
  updateSponsorUs
}
