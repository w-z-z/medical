/*
 * @Author: ranli
 * @Date: 2019-09-11 17:49:40
 * @LastEditors: lc
 * @LastEditTime: 2019-10-16 14:39:38
 * @Description: Description
 */
/**
 * 全局配置
 *
 */

// 基础信息配置
export const appConfig = {
  // 版本号
  version: '1.0.0',
  // 缓存配置(window.sessionStorage或者window.localStorage)
  storage: window.localStorage,
  // 超时设置
  TIMEOUT: 5000,
  // 接口请求
  // requesUrl: 'https://backend.facaijishi.cn' //正式环境
  requesUrl: 'http://kaicaifront.hqt.com/',
  requesImgUrl: 'http://img.hqt.com/',
}
// // 持久化存储配置
// const _loaclkey = 'APP_'
// export const storageConfig = {
//   // 用户缓存
//   key: `${_loaclkey}USER_INFO`,
//   // 版本缓存
//   version: `${_loaclkey}VERSION`
// }
