/*
 * @Author: ranli
 * @Date: 2019-09-26 15:21:16
 * @LastEditors  : ranli
 * @LastEditTime : 2019-12-23 11:42:48
 * @Description: Description
 */
/*
 * 将所有的接口挂载到 vue 的原型上 ,在 main.js 实现初始化
 */

import Url from './url'
import Service from './net/http'
export let api = Url.reduce((apiObj, u) => {
  let methods = u.methods || 'post'
  apiObj[u.name] = data => Service[methods](u.url, data)
  return apiObj
}, {})

export default {
  install(Vue) {
    Vue.prototype.$api = api;
  }
}