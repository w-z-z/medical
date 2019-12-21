// vue.config.js
const fs = require('fs')
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: fs.readFileSync('src/styles/globals.scss', 'utf-8')
      }
    }
  },
//   chainWebpack: (config)=>{
//     config.resolve.alias
//         .set('@components',resolve('src/components'))
        
// }
}