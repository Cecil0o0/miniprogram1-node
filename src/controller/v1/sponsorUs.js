const services = require('../../service')

const { SponsorUsService } = services

module.exports = {
  mount(router) {
    router.get('/sponsorUss', async(ctx, next) => {
      ctx.body = SponsorUsService.getSponsorUss()
      next()
    })

    router.get('/sponsorUs/:id', async(ctx, next) => {
      const { id } = ctx.params
      ctx.body = await SponsorUsService.getSponsorUs(id)
      next()
    })

    router.post('/sponsorUs', async (ctx, next) => {
      const sponsorUs = ctx.request.body
      let res = await SponsorUsService.addSponsorUs(sponsorUs)
      ctx.body = res
      next()
    })

    router.delete('/sponsorUs/:id', async(ctx, next) => {
      const { id } = ctx.params
      ctx.body = await SponsorUsService.removeSponsorUs(id)
      next()
    })

    router.put('/sponsorUs', async(ctx, next) => {
      const sponsorUs = ctx.request.body
      ctx.body = await SponsorUsService.updateSponsorUs(sponsorUs)
      next()
    })
  }
}
