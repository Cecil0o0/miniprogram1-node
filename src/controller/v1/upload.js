const { UploadService } = require('../../service')

module.exports = {
  mount(router) {
    router.post('/upload', async(ctx, next) => {
      const file = ctx.request.files.file
      ctx.body = await UploadService.uploadFile(file)
      next()
    })

    router.get('/upload/:ids', async(ctx, next) => {
      const { ids } = ctx.params
      let data = await UploadService.getUploads(ids && ids.split(','))
      ctx.body = ctx.returnWrapper({ data })
      next()
    })
  }
}
