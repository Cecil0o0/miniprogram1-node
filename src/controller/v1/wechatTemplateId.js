const services = require('../../service')

const { WechatTemplateIdService } = services

module.exports = {
  mount(router) {
    router.get('/wechatTemplateId/:id', async(ctx, next) => {
      const { id } = ctx.params
      ctx.body = await WechatTemplateIdService.getWechatTemplateId(id)
      next()
    })

    router.post('/wechatTemplateId', async (ctx, next) => {
      const wechatTemplateId = ctx.request.body
      let res = await WechatTemplateIdService.addWechatTemplateId(wechatTemplateId)
      ctx.body = res
      next()
    })
  }
}
