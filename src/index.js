const Koa = require('koa')
const router = require('./router')
const { port } = require('../config')

const app = new Koa()

// 路由
router.use(app)

app.listen(port, () => {
  console.log('server is listening at port ' + port)
})
