const services = require('../../service')
const defaultModelInfo = require('../../defaultData')

const { LoginService, UserService, RoleService, RoleOpenIdRelationsService, ModelService } = services

module.exports = {
  mount(router) {
    router.post('/login', async(ctx, next) => {
      const { code } = ctx.request.body
      const data = await LoginService.login({code})
      let role = RoleService.getRole({ key: 'normal' })
      let openId = data.openId
      if (data.isNew) {
        // 新用户登陆后逻辑
        // 自动创建新用户
        UserService.addUser({
          openId
        })
        // 自动添加用户角色，默认角色为模特用户
        RoleOpenIdRelationsService.addRoleOpenIdRelation({
          openId,
          roleId: 'role2'
        })
        // 自动添加模特信息
        ModelService.addModel(defaultModelInfo.model)
      }
      // 找到关联的角色
      let relation = RoleOpenIdRelationsService.getRoleOpenIdRelation({
        openId
      })
      // 找到角色信息
      role = RoleService.getRole({
        id: relation.roleId
      })
      // 拿用户id
      let userId = UserService.getUserByEntry({ openId }).id

      // 只要登陆成功都会返回token，可能有用户信息
      ctx.body = ctx.returnWrapper({
        data: {
          id: userId,
          token: data.token,
          role
        }
      })
      next()
    })
  }
}
