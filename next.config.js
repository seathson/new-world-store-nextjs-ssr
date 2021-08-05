require('dotenv').config()

module.exports = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.REACT_APP_API_DB,
  }
}
