const koaBody = require('koa-body')
const serve = require('koa-static')
const auth = require('./auth')
const error = require('./error')
const outter = require('./outter')

module.exports = {
  mount(app) {
    // serve上传资源
    app.use(serve(__dirname + '/../../live'))
    // 统一对外的响应体工厂函数
    app.use(outter())
    // 错误中间件
    app.use(error())
    // 校验服务器
    app.use(auth())
    // body-parser中间件
    app.use(koaBody({
      multipart: true
    }))
    console.log('mounted middlewares')
  }
}
