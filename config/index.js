const dev = require('./dev')
const prod = require('./prod')

module.exports = Object.assign(
  {
    port: 3100,
    appId: 'wxa324150d4ca3f515',
    appSecret: '4b6274dae6cb0c3a59ac4409ce4674a4'
  },
  process.env.NODE_ENV === 'production' ? prod : dev
)
