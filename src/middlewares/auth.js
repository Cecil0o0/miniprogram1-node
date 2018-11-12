const sessionDB = require('.././db-driver/session')
const minimatch = require('minimatch')

let whiteRule = [
  '/*/login'
]

function validateWhiteRule(path) {
  for(let i = 0; i < whiteRule.length; i++) {
    let rule = whiteRule[i]
    if (minimatch(path, rule)) {
      return true
    }
  }
  return false
}

module.exports = (options) => {
  return async (ctx, next) => {
    // 判断是否是白名单
    if (!validateWhiteRule(ctx.request.path)) {
      // 判断是否已经登陆
      const { token } = ctx.request.headers
      let result = sessionDB.get('sessions').find({
        token
      }).value()
      if (!result) {
        ctx.body = ctx.returnWrapper({
          reason: '无访问权限',
          success: false
        })
        // 必须要加return，否则中间件会继续执行
        return
      }
    }
    await next()
  }
}
