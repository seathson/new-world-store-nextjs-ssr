module.exports = {
  apps: [
    {
      name: 'frontend',
      script: './pages/index.js',
      watch: true,
      env_development: {
        PORT: 3000,
        NODE_ENV: 'development',
      },
      env_production: {
        PORT: 8001,
        NODE_ENV: 'production',
      },
    },
  ],
}
