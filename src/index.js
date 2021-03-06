const Koa = require('koa')
const router = require('./controller')
const middlewares = require('./middlewares')
const { port } = require('../config')

const app = new Koa()

// 挂载中间件
middlewares.mount(app)

// 挂载路由
router.mount(app)

// 启动全局定时器
require('./other/timers')()

app.listen(port, () => {
  console.log('server is listening at port ' + port)
})
