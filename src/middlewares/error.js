module.exports = () => {
  return async function(ctx, next) {
    try{
      await next()
    } catch(e) {
      console.error(e)
      ctx.body = ctx.returnWrapper({
        success: false,
        reason: 'system error'
      })
    }
  }
}
