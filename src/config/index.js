/*
 * @Author: ranli
 * @Date: 2019-09-11 17:49:40
 * @LastEditors  : ranli
 * @LastEditTime : 2019-12-23 11:34:06
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