const KoaRouter = require('koa-router')
const v1Router = new KoaRouter({
  prefix: '/v1'
})

require('./model').mount(v1Router)
require('./user').mount(v1Router)
require('./sponsorUs').mount(v1Router)
require('./advice').mount(v1Router)
require('./wechatTemplateId').mount(v1Router)
require('./banner').mount(v1Router)
require('./upload').mount(v1Router)
require('./login').mount(v1Router)
require('./hf').mount(v1Router)
require('./search').mount(v1Router)

module.exports = v1Router
