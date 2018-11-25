const { getIPAdress } = require('../src/utils/helper')

module.exports = {
  upload: {
    // 访问前缀
    accessPrefix: `//${getIPAdress()}:3100`
  }
}
