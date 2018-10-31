const services = require('../../service')

const { UserService } = services

module.exports = {
  mount(router) {
    router.get('/users', async(ctx, next) => {
      ctx.body = UserService.getUsers()
      console.log(ctx.request.headers)
      next()
    })

    router.get('/user/:id', async(ctx, next) => {
      const { id } = ctx.params
      ctx.body = await UserService.getUser(id)
      next()
    })

    router.post('/user', async (ctx, next) => {
      const user = ctx.request.body
      let res = await UserService.addUser(user)
      ctx.body = res
      next()
    })

    router.delete('/user/:id', async(ctx, next) => {
      const { id } = ctx.params
      ctx.body = await UserService.removeUser(id)
      next()
    })

    router.put('/user', async(ctx, next) => {
      const user = ctx.request.body
      ctx.body = await UserService.updateUser(user)
      next()
    })
  }
}
