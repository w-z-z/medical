/*
 * @Description: 接口统一配置文件
 * @Version: 1.1.0
 * @Autor: ranli
 * @Date: 2019-12-20 21:25:47
 * @LastEditors  : ranli
 * @LastEditTime : 2020-01-15 14:13:00
 */


import axios from 'axios'
import apiError from './apiError'
import store from '@/store'
import router from '@/router'
import {
  appConfig
} from '@/config'
const md5 = require('js-md5')
// 创建实例时设置配置的默认值

const Service = axios.create({
  timeout: appConfig.TIMEOUT, // 超时
  // baseURL: appConfig.requesUrl, // 路径
  baseURL: process.env.VUE_APP_API_URL, // 路径
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  }
})
// 添加请求拦截器
Service.interceptors.request.use(
  config => {
    // console.log(store.state.user.userInfo)
    let _token = store.state.user.userInfo && store.state.user.userInfo.token ? store.getters.userInfo.token : ""
    if (_token) {
      config.headers.Authorization = _token
    }
    if (config.method === 'post') {
      config.data = signature(config.data)
    }
    return config
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)
// 添加响应拦截器
Service.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    if (response.data) {
      return response.data;
    } else {
      return "";
    }
  },
  error => {
    if (error.response.data) {
      let {
        Key, //key
        Msg, //文本信息
      } = error.response.data
      // 未登录key
      if (Key == appConfig.UnLoginCode) {
        store.dispatch("clearAllUserData")
      }
      return apiError(Msg)
    } else {
      return apiError('加载错误')
    }
  }
)

/**
 * 签名
 * @param {*} data
 */
function signature(data = {}) {
  let signData = {}
  // let _auth_key = ''

  // signData['token'] = token
  // let _userInfo = store.getters.userInfo;
  // if (_userInfo) {
  //   _auth_key = _userInfo.auth_key
  // }
  // const _key = 'C#uUcw5gIcI8PZqrVCt$$Qwx1qHNJJ'
  // const nowDate = Date.parse(new Date()) / 1000
  // const hash = md5(_auth_key + '' + nowDate + '' + _key)
  // signData['access_time'] = nowDate
  // signData['access_key'] = hash
  // signData['auth_key'] = _auth_key
  // signData['version'] = '1.0.0'

  return Object.assign(data, signData)
}
/**
 *图片上传验签
 * @param {*} data
 */
function signatureImg(data = new FormData()) {
  let signData = new FormData();
  const _key = '64C9AC2BB5FE46C3AC32844BB97BE6BC'
  const nowDate = Date.parse(new Date()) / 1000
  const hash = md5(_key + parseInt(nowDate / 60)).toUpperCase()
  signData.append('sign', hash)
  signData.append('platform', "seller")
  signData.append('access_time', nowDate)
  data.forEach(element => {
    signData.append(element.label, element.value)
  });
  return signData;
}
export let signatureFn = signature;
export let signatureImgFn = signatureImg;
export default Service;