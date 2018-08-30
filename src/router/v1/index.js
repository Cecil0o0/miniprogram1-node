const db = require('../../db')
module.exports = {
  mount(router) {
    router.get('/card/:id', async(ctx, next) => {
      const { id } = ctx.params
      db.set('user.name', +id).write()
      ctx.body = 'test'
      next()
    })
  }
}
