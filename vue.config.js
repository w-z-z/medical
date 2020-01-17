/*
 * @Description: 文件描述
 * @Version: 1.1.0
 * @Autor: ranli
 * @Date: 2020-01-03 10:53:41
 * @LastEditors  : ranli
 * @LastEditTime : 2020-01-15 14:35:59
 */
// vue.config.js
const fs = require('fs')
module.exports = {
  outputDir: process.env.outputDir,
  publicPath: "./",
  css: {
    loaderOptions: {
      sass: {
        prependData: fs.readFileSync('src/styles/globals.scss', 'utf-8')
      }
    }
  },
  // configureWebpack: config => {
  //   config.entry.app = ["babel-polyfill", "./src/main.js"];
  // }
}