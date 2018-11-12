const services = require('../../service')
const db = require('../../db-driver')

const { ModelService } = services

module.exports = {
  mount(router) {
    router.get('/models', async(ctx, next) => {
      let data = await ModelService.getModels()
      ctx.body = ctx.returnWrapper({
        data
      })
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

    router.get('/model/hot', async(ctx, next) => {
      const { page, size } = ctx.request.query
      let models = db.get('models').sortBy('popularity').reverse().cloneDeep().value()
      let list = models.slice((page - 1) * size, page * size)
      ctx.body = ctx.returnWrapper({
        data: {
          list,
          total: models.length
        }
      })
      next()
    })

    router.get('/model/sponsor', async(ctx, next) => {
      const { page, size } = ctx.request.query
      let models = db.get('models').sortBy('subscribe').reverse().cloneDeep().value()
      let list = models.slice((page - 1) * size, page * size)
      ctx.body = ctx.returnWrapper({
        data: {
          list,
          total: models.length
        }
      })
      next()
    })
  }
}
