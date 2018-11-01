const services = require('../../service')

const { CardService } = services

module.exports = {
  mount(router) {
    router.get('/cards', async(ctx, next) => {
      ctx.body = CardService.getCards()
      next()
    })

    router.post('/card', async (ctx, next) => {
      const card = ctx.request.body
      let res = await CardService.addCard(card)
      ctx.body = res
      next()
    })

    router.delete('/card/:id', async(ctx, next) => {
      const { id } = ctx.params
      ctx.body = await CardService.removeCard(id)
      next()
    })

    router.put('/card', async(ctx, next) => {
      const card = ctx.request.body
      ctx.body = await CardService.updateCard(card)
      next()
    })
  }
}
