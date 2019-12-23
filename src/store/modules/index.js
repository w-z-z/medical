/*
 * @Description: 数据的模块化入口文件
 * @Version: 1.1.0
 * @Autor: ranli
 * @Date: 2019-12-20 21:25:48
 * @LastEditors  : ranli
 * @LastEditTime : 2019-12-23 11:26:36
 */
const files = require.context('.', false, /\.js$/)
const modules = {}

files.keys().forEach(key => {
  if (key === './index.js') return
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})
export default modules