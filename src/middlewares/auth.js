function auth(ctx, next) {
  return next()
}

module.exports = (options) => {
  return auth
}
