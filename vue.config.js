'use strict'
module.exports = {
  devServer: {
    host: process.env.HOSTNAME,
    port: process.env.PORT,
    disableHostCheck: true
  }
}
