module.exports = {
  apps: [
    {
      name: 'modelService',
      script: 'src/index.js',
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
}
