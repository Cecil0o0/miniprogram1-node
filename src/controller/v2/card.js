module.exports = {
  mount(router) {
    router.get('/cards', async(ctx, next) => {
      ctx.body = '{text: "this is v2/cards"}'
      next()
    })
  }
}
