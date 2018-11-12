const sessionDB = require('../db-driver/session')
const axios = require('axios')
const { appId, appSecret } = require('../../config')
const { generateHash } = require('../utils/crypto')

async function login({ code }) {
  const res = await axios.get(`https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${appSecret}&js_code=${code}&grant_type=authorization_code`)
  if (res.data) {
    const { openid, session_key } = res.data
    const token = generateHash(openid, session_key)
    const sessionCollection = sessionDB.get('sessions')
    const entry = sessionCollection.find({ openId: openid }).value()
    console.log(entry)
    if (entry) {
      // 老用户登陆，已经有session信息，但是session过期（具体逻辑由微信服务器维护）
      sessionCollection.updateWhere({
        id: entry.id
      }, {
        id: entry.id,
        openId: openid,
        sessionKey: session_key,
        token
      }).write()
      return { openId: openid, token, isNew: false }
    } else {
      // 新用户登陆
      sessionCollection.insert({
        openId: openid,
        sessionKey: session_key,
        token
      }).write()
      return { openId: openid, token, isNew: true }
    }
  } else {
    throw new Error('登陆失败')
  }
}

module.exports = {
  login
}
