const { UploadService } = require('../../service')

module.exports = {
  mount(router) {
    router.post('/upload', async(ctx, next) => {
      const file = ctx.request.files.file
      ctx.body = await UploadService.uploadFile(file)
      next()
    })
  }
}
