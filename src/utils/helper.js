module.exports = {
  pick(obj, arr) {
    let o = {}
    arr.forEach(key => o[key] = obj[key])
    return o
  }
}
