const koaBody = require('koa-body')
const auth = require('./auth')

module.exports = {
  mount(app) {
    app.use(auth())
    app.use(koaBody())
    console.log('mounted middlewares')
  }
}
