const services = require('../../service')

const { AdviceService } = services

module.exports = {
  mount(router) {
    router.get('/advices', async(ctx, next) => {
      ctx.body = AdviceService.getAdvices()
      console.log(ctx.request.headers)
      next()
    })

    router.get('/advice/:id', async(ctx, next) => {
      const { id } = ctx.params
      ctx.body = await AdviceService.getAdvice(id)
      next()
    })

    router.post('/advice', async (ctx, next) => {
      const advice = ctx.request.body
      let res = await AdviceService.addAdvice(advice)
      ctx.body = res
      next()
    })

    router.delete('/advice/:id', async(ctx, next) => {
      const { id } = ctx.params
      ctx.body = await AdviceService.removeAdvice(id)
      next()
    })

    router.put('/advice', async(ctx, next) => {
      const advice = ctx.request.body
      ctx.body = await AdviceService.updateAdvice(advice)
      next()
    })
  }
}
