const dev = require('./dev')
const prod = require('./prod')

module.exports = Object.assign(
  {
    port: 3100
  },
  process.env.NODE_ENV === 'production' ? prod : dev
)
