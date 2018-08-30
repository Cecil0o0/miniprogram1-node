const KoaRouter = require('koa-router')
const router = new KoaRouter()
const v1 = require('./v1')

v1.mount(router)

module.exports = {
  use (app) {
    app.use(router.routes()).use(router.allowedMethods())
  }
}
