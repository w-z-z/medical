// vue.config.js
const fs = require('fs')
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: fs.readFileSync('src/styles/globals.scss', 'utf-8')
      }
    }
  }
}