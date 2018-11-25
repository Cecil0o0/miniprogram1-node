module.exports = {
  apps: [
    {
      name: 'modelService',
      script: __dirname + '/../src/index.js',
      watch: false,
      exec_mode: 'fork',
      instances: 1,
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
}
