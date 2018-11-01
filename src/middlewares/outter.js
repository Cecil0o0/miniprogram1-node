module.exports = function() {
  return async (ctx, next) => {
    ctx.returnWrapper = ({ data, success = true, reason } = {}) => {
      return Object.assign({
        success,
        data
      }, success || { reason })
    }
    await next()
  }
}
