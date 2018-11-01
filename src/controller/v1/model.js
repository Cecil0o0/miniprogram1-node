const services = require('../../service')

const { ModelService } = services

module.exports = {
  mount(router) {
    router.get('/models', async(ctx, next) => {
      ctx.body = ModelService.getModels()
      next()
    })

    router.get('/model/:id', async(ctx, next) => {
      const { id } = ctx.params
      const data = await ModelService.getModel(id)
      ctx.body = ctx.returnWrapper({
        data
      })
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
      const data = await ModelService.updateModel(model)
      ctx.body = ctx.returnWrapper({
        data
      })
      next()
    })
  }
}
