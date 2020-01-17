/*
 * @Author: ranli
 * @Date: 2019-09-11 17:49:40
 * @LastEditors  : ranli
 * @LastEditTime : 2020-01-15 14:14:05
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
  //图片上传模块的秘钥配置--未使用
  // uploadAccessKey: 'OUAOinQtE1NjRr29Q4X3mU_uNCljvLrfgviIw55G',
  // uploadSecretKey: 'MYIkEUf7mN_QpMxKtmbujt3nqW1-dxPfqJlIb6a1',
  // 超时设置
  TIMEOUT: 10000,
  UnLoginCode: "AuthorizationServerError",
  // 接口请求,
  //以下 配置不再生效
  // requesUrl: 'http://120.79.21.155:8100/', //测试环境
  // requesUrl: 'http://120.79.21.155:8101/',//正式环境
  // requesImgUrl: 'http://file.pms.sc.cn/',
}