const KoaRouter = require('koa-router')
const v1Router = new KoaRouter({
  prefix: '/v1'
})

require('./card').mount(v1Router)
require('./model').mount(v1Router)
require('./user').mount(v1Router)
require('./sponsorUs').mount(v1Router)
require('./advice').mount(v1Router)
require('./wechatTemplateId').mount(v1Router)
require('./banner').mount(v1Router)
require('./upload').mount(v1Router)

module.exports = v1Router
