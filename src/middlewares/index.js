const koaBody = require('koa-body')
const auth = require('./auth')
const error = require('./error')

module.exports = {
  mount(app) {
    app.use(error())
    app.use(auth())
    app.use(koaBody())
    console.log('mounted middlewares')
  }
}
