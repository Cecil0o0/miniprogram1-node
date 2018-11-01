const { UploadService } = require('../../service')

module.exports = {
  mount(router) {
    router.post('/upload/:id', async(ctx, next) => {
      const file = ctx.request.files.file
      const { id } = ctx.params
      let result = await UploadService.uploadFile(id, file)
      ctx.body = ctx.returnWrapper({
        data: result
      })
      next()
    })
  }
}
