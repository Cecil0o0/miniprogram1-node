const v1Routers = require('./v1')
const v2Routers = require('./v2')

module.exports = {
  mount(app) {
    app.use(v1Routers.routes()).use(v1Routers.allowedMethods())
    app.use(v2Routers.routes()).use(v2Routers.allowedMethods())
  }
}
