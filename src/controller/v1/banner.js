const services = require('../../service')

const { BannerService } = services

module.exports = {
  mount(router) {
    router.get('/banners', async(ctx, next) => {
      const data = await BannerService.getBanners()
      ctx.body = ctx.returnWrapper({
        data
      })
      next()
    })

    router.post('/banner', async (ctx, next) => {
      const banner = ctx.request.body
      let res = await BannerService.addBanner(banner)
      ctx.body = res
      next()
    })
  }
}
