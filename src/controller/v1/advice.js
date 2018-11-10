const services = require('../../service')

const { AdviceService } = services

module.exports = {
  mount(router) {
    router.get('/advices', async(ctx, next) => {
      let data = AdviceService.getAdvices()
      ctx.body = ctx.returnWrapper({
        data
      })
      next()
    })

    router.get('/advice/:id', async(ctx, next) => {
      const { id } = ctx.params
      let data = await AdviceService.getAdvice(id)
      ctx.body = ctx.returnWrapper({
        data
      })
      next()
    })

    router.post('/advice', async (ctx, next) => {
      const advice = ctx.request.body
      let data = await AdviceService.addAdvice(advice)
      ctx.body = ctx.returnWrapper({
        data
      })
      next()
    })

    router.delete('/advice/:id', async(ctx, next) => {
      const { id } = ctx.params
      let data = await AdviceService.removeAdvice(id)
      ctx.body = ctx.returnWrapper({
        data
      })
      next()
    })

    router.put('/advice', async(ctx, next) => {
      const advice = ctx.request.body
      let data = await AdviceService.updateAdvice(advice)
      ctx.body = ctx.returnWrapper({
        data
      })
      next()
    })
  }
}
