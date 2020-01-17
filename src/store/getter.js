/*
 * @Description: vuex的getter文件
 * @Version: 1.1.0
 * @Autor: ranli
 * @Date: 2019-12-20 23:56:20
 * @LastEditors  : Seven
 * @LastEditTime : 2020-01-02 12:35:59
 */
export default {
   userInfo: (state) => {
      return state.user.userInfo
   },
   getToken: (state) => {
      return state.user.userInfo.token
   },
   getCurrentRouterType: (state) => {
      return state.user.currentRouterType
   },
   getRegData: (state) => {
      return state.reg.regData
   }
}