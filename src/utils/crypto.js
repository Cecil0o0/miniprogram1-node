const crypto = require('crypto')
module.exports = {
  generateHash(secret = 'abc', text = '') {
    // TODO 使用子线程去算hash
    const hash = crypto
      .createHmac('sha256', secret)
      .update(text)
      .digest('hex')

    return hash
  }
}
