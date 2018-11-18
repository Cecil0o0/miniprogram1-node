const db = require('../../db-driver')

module.exports = {
  mount(router) {
    // 根据特定文本搜索模特
    router.get('/search/models', (ctx, next) => {
      const { text, page, size } = ctx.request.query
      if (!text) {
        ctx.body = ctx.returnWrapper({
          data: []
        })
        return
      }
      let models = []
      // 名称
      if (!models.length) {
        models = db.get('models').filter(model => {
          return model.name && model.name.indexOf(text) !== -1
        }).value()
      }
      // 特长
      if (!models.length) {
        models = db.get('models').filter(model => {
          return model.specialities && model.specialities.some(item => item.includes(text))
        }).value()
      }
      // 学院
      if (!models.length) {
        models = db.get('models').filter(model => {
          return model.school && model.school.includes(text)
        }).value()
      }

      // 分页搜索
      models = models.slice((page - 1) * size, page * size)

      ctx.body = ctx.returnWrapper({
        data: models || []
      })
      next()
    })
  }
}
