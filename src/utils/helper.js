module.exports = {
  pick(obj, arr) {
    let o = {}
    arr.forEach(key => o[key] = obj[key])
    return o
  },
  getIPAdress() {
    var interfaces = require('os').networkInterfaces();
    for (var devName in interfaces) {
      var iface = interfaces[devName];
      for (var i = 0; i < iface.length; i++) {
        var alias = iface[i];
        if (
          alias.family === 'IPv4' &&
          alias.address !== '127.0.0.1' &&
          !alias.internal &&
          alias.address.indexOf('169.254') === -1
        ) {
          return alias.address;
        }
      }
    }
  }
}
