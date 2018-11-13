const koaBody = require('koa-body')
const auth = require('./auth')
const error = require('./error')
const outter = require('./outter')
const serve = require('koa-static')

module.exports = {
  mount(app) {
    // serve上传资源
    app.use(serve(__dirname + '/../../live'))
    app.use(outter())
    app.use(error())
    app.use(auth())
    app.use(koaBody({
      multipart: true
    }))
    console.log('mounted middlewares')
  }
}
