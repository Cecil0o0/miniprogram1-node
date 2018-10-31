const services = require('../../service')

const { ModelService } = services

module.exports = {
  mount(router) {
    router.get('/models', async(ctx, next) => {
      ctx.body = ModelService.getModels()
      console.log(ctx.request.headers)
      next()
    })

    router.get('/model/:id', async(ctx, next) => {
      const { id } = ctx.params
      ctx.body = await ModelService.getModel(id)
      next()
    })

    router.post('/model', async (ctx, next) => {
      const model = ctx.request.body
      let res = await ModelService.addModel(model)
      ctx.body = res
      next()
    })

    router.delete('/model/:id', async(ctx, next) => {
      const { id } = ctx.params
      ctx.body = await ModelService.removeModel(id)
      next()
    })

    router.put('/model', async(ctx, next) => {
      const model = ctx.request.body
      ctx.body = await ModelService.updateModel(model)
      next()
    })
  }
}
