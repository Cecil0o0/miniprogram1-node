const { ModelService } = require('../../service')
const db = require('../../db-driver')

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
    // 赞助 +1
    router.get('/hf/sponsor', sponsorOrHot('subscribe'))
    // 人气 +1
    router.get('/hf/hot', sponsorOrHot('popularity'))
    // 加关注
    router.post('/hf/addAttention', async(ctx, next) => {
      const { userId, modelId } = ctx.request.body
      let model = db.get('models').find({ id: userId }).value()
      let attentions = model ? model.attentions : []
      if (attentions.includes(modelId)) {
        ctx.body = ctx.returnWrapper({
          success: false,
          reason: '重复关注'
        })
      } else {
        db.get('models').updateById(userId, { attentions: attentions.concat([modelId]) }).write()
        ctx.body = ctx.returnWrapper()
      }
      await next()
    })
    // 取消关注
    router.post('/hf/removeAttention', async(ctx, next) => {
      const { userId, modelId } = ctx.request.body
      let model = db.get('models').find({ id: userId }).value()
      let attentions = model ? model.attentions.slice() : []
      let index = attentions.indexOf(modelId)
      if (index === -1) {
        ctx.body = ctx.returnWrapper({
          success: false,
          reason: '未关注'
        })
      } else {
        attentions.splice(index, 1)
        db.get('models').updateById(userId, { attentions }).write()
        ctx.body = ctx.returnWrapper()
      }
      await next()
    })
    // 获取当前用户是否关注model
    router.get('/hf/getIfAttention', async(ctx, next) => {
      const { modelId, userId } = ctx.request.query
      let model = db.get('models').find({ id: userId }).value()
      let followings = model ? model.attentions : []
      ctx.body = ctx.returnWrapper({
        data: followings.includes(modelId)
      })
      await next()
    })
  }
}
