const { ModelService } = require('../../service')

function sponsorOrHot(type) {
  return async(ctx, next) => {
    const { modelId } = ctx.request.query
    let model = ModelService.getModel(modelId)
    if (model) {
      let num = model[type]
      ModelService.updateModel({
        id: modelId,
        [type]: num + 1
      })
      ctx.body = ctx.returnWrapper()
      await next()
    } else {
      ctx.body = ctx.returnWrapper({
        success: false,
        reason: '无该模特信息'
      })
      return
    }
  }
}

module.exports = {
  mount(router) {
    // 赞助
    router.get('/hf/sponsor', sponsorOrHot('subscribe'))
    // 打气
    router.get('/hf/hot', sponsorOrHot('hot'))
  }
}
