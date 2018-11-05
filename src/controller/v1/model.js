const services = require('../../service')

const { ModelService, UploadService } = services

module.exports = {
  mount(router) {
    router.get('/models', async(ctx, next) => {
      ctx.body = ModelService.getModels()
      next()
    })

    router.get('/model/:id', async(ctx, next) => {
      const { id } = ctx.params
      const data = await ModelService.getModel(id)
      // 拼装相册数据
      data.photos = UploadService.getUploads(data.photos)
      // 拼装海报数据
      data.posters = UploadService.getUploads(data.posters)
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
